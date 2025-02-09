"use client";
import { useState, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setSubmissionMessage(null);
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form inputs
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setSubmissionMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmissionMessage("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionMessage("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("background-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starVertices: number[] = [];

    for (let i = 0; i < 5000; i++) {
      starVertices.push((Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000);
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      starGeometry.dispose();
    };
  }, []);

  return (
    <section id="contact" className="relative py-20 bg-gray-900">
      <canvas id="background-canvas" className="absolute inset-0 z-0"></canvas>
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-white">Contact Me</motion.h2>
        <div className="max-w-3xl mx-auto border-4 border-blue-500 rounded-lg p-8 bg-[#0F172A] shadow-lg">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              aria-label="Name"
              className="w-full p-2 border rounded text-black bg-white placeholder-gray-700"
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              aria-label="Email"
              className="w-full p-2 border rounded text-black bg-white placeholder-gray-700"
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              aria-label="Message"
              className="w-full p-2 border rounded text-black bg-white placeholder-gray-700"
              rows={5}
            />
            {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

            <button type="submit" disabled={isSubmitting} className="w-full p-2 bg-blue-500 text-white rounded">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submissionMessage && (
              <p className={submissionMessage.includes("Error") ? "text-red-500" : "text-green-500"}>
                {submissionMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
