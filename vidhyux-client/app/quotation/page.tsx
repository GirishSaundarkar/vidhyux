"use client";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Download, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

type Program = {
  day: string;
  programme: string;
  side: string;
  type: string;
  locations: string;
};

type Payment = {
  label: string;
  amount: string;
};

type FormData = {
  clientName: string;
  event: string;
  location: string;
  programs: Program[];
  included: string[];
  totalInvestment: string;
  downPayment: string;
  payments: Payment[];
  brandName: string;
  tagline: string;
};

const programmeOptions = [
  "Gondhal",
  "Mehendi",
  "Haldi",
  "Shreemanti pujan",
  "Engagement",
  "Sangeet",
  "Kulachar",
  "Wedding",
  "reception",
];

const sideOptions = [
  "groom",
  "bride",
  "both"
];

const typeOptions = [
  "Traditional Photography",
  "Candid Photography",
  "Traditional Videography",
  "Cinematic Videography",
  "Reels Shoot"
];

const ContractGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    clientName: "Samiksha Deshpande",
    event: "Wedding Celebration",
    location: "Yavatmal",
    programs: [
      {
        day: "Day 1",
        programme: "Engagement",
        side: "bride",
        type: "Traditional Photography",
        locations: "Yavatmal",
      },
      {
        day: "Day 2",
        programme: "Kulachar",
        side: "bride",
        type: "Candid Photography",
        locations: "Yavatmal",
      },
      {
        day: "Day 3",
        programme: "Mehendi",
        side: "bride",
        type: "Traditional Videography",
        locations: "Yavatmal",
      },
      {
        day: "Day 4",
        programme: "Haldi & Shreemanti",
        side: "bride",
        type: "Cinematic Videography",
        locations: "Yavatmal",
      },
      {
        day: "Day 5",
        programme: "Wedding",
        side: "both",
        type: "Reels Shoot",
        locations: "Both-Ginemati",
      },
    ],
    included: [
      "Traditional Video, Cinematic Video & Reel.",
      '1 Premium Wedding Album (12"x36" | 240 photos | 40 sheets)',
      "Soft Copies All Photos",
    ],
    totalInvestment: "1,20,000",
    downPayment: "20,000",
    payments: [
      { label: "Booking Amount", amount: "20,000" },
      { label: "Before Events", amount: "30,000" },
      { label: "Before Wedding", amount: "40,000" },
      { label: "Final Payment", amount: "30,000" },
    ],
    brandName: "PB PHOTOGRAPHY",
    tagline: "Capturing Your Forever Moments",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProgramChange = (index: number, field: string, value: string) => {
    const newPrograms = [...formData.programs];
    newPrograms[index][field as keyof Program] = value;
    setFormData((prev) => ({ ...prev, programs: newPrograms }));
  };

  const addProgram = () => {
    setFormData((prev) => ({
      ...prev,
      programs: [
        ...prev.programs,
        {
          day: `Day ${prev.programs.length + 1}`,
          programme: "",
          side: "",
          type: "",
          locations: "",
        },
      ],
    }));
  };

  const removeProgram = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      programs: prev.programs.filter((_, i) => i !== index),
    }));
  };

  const handleIncludedChange = (index: number, value: string) => {
    const newIncluded = [...formData.included];
    newIncluded[index] = value;
    setFormData((prev) => ({ ...prev, included: newIncluded }));
  };

  const addIncluded = () => {
    setFormData((prev) => ({ ...prev, included: [...prev.included, ""] }));
  };

  const removeIncluded = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      included: prev.included.filter((_, i) => i !== index),
    }));
  };

  const handlePaymentChange = (index: number, field: string, value: string) => {
    const newPayments = [...formData.payments];
    newPayments[index][field as keyof Payment] = value;
    setFormData((prev) => ({ ...prev, payments: newPayments }));
  };

  const addPayment = () => {
    setFormData((prev) => ({
      ...prev,
      payments: [...prev.payments, { label: "", amount: "" }],
    }));
  };

  const removePayment = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      payments: prev.payments.filter((_, i) => i !== index),
    }));
  };

  const downloadPDF = async () => {
    setLoading(true);
    try {
      const element = document.getElementById("a4-document")!;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FDFBF7",
        ignoreElements: (el) =>
          el.tagName === "svg" || el.classList.contains("prose"),
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.clientName.replace(/\s+/g, "_")}_Contract.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-[450px] flex-shrink-0 border-r border-stone-200 bg-white p-6">
        <div className="max-h-screen overflow-y-auto pb-20">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-stone-900 mb-2">
                Contract Generator
              </h1>
              <p className="text-sm text-stone-600">
                Fill in the details to create your professional contract
              </p>
            </div>

            <Separator />

            {/* Brand Details */}
            <div className="space-y-4">
              <h3 className="font-medium text-stone-900">Brand Details</h3>
              <div>
                <Label htmlFor="brandName">Brand Name</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => handleChange("brandName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={formData.tagline}
                  onChange={(e) => handleChange("tagline", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <Separator />

            {/* Client Details */}
            <div className="space-y-4">
              <h3 className="font-medium text-stone-900">Client Details</h3>
              <div>
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => handleChange("clientName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="event">Event</Label>
                <Input
                  id="event"
                  value={formData.event}
                  onChange={(e) => handleChange("event", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <Separator />

            {/* Programs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-stone-900">Programs Covered</h3>
                <Button
                  onClick={addProgram}
                  size="sm"
                  variant="outline"
                  className="h-8"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
              {formData.programs.map((program, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <Label className="text-xs text-stone-600">
                        Program {index + 1}
                      </Label>
                      <Button
                        onClick={() => removeProgram(index)}
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="relative">
                      <Input
                        type="date"
                        value={program.day}
                        onChange={(e) => handleProgramChange(index, "day", e.target.value)}
                        className="text-sm pl-10"
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                    </div>
                    <select
                      value={program.programme}
                      onChange={(e) => handleProgramChange(index, "programme", e.target.value)}
                      className="w-full p-2 border border-stone-200 rounded-md text-sm focus:ring-2 focus:ring-stone-300 focus:border-stone-400"
                    >
                      <option value="">Select Programme</option>
                      {programmeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      value={program.side}
                      onChange={(e) => handleProgramChange(index, "side", e.target.value)}
                      className="w-full p-2 border border-stone-200 rounded-md text-sm focus:ring-2 focus:ring-stone-300 focus:border-stone-400"
                    >
                      <option value="">Select Side</option>
                      {sideOptions.map((option) => (
                        <option key={option} value={option}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                      ))}
                    </select>
                    <div className="space-y-2 p-2 border border-stone-200 rounded-md">
                      {typeOptions.map((option) => (
                        <label key={option} className="flex items-center space-x-2 cursor-pointer text-sm">
                          <input
                            type="checkbox"
                            checked={program.type.includes(option)}
                            onChange={(e) => {
                              const newTypes = e.target.checked
                                ? [...(program.type.split(', ').filter(t => t) || []), option]
                                : program.type.split(', ').filter(t => t !== option)
                              handleProgramChange(index, 'type', newTypes.join(', '))
                            }}
                            className="w-4 h-4 text-stone-600 border-stone-300 rounded focus:ring-stone-400 focus:ring-2"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    <Input
                      placeholder="Locations"
                      value={program.locations}
                      onChange={(e) =>
                        handleProgramChange(index, "locations", e.target.value)
                      }
                      className="text-sm"
                    />
                  </div>
                </Card>
              ))}
            </div>

            <Separator />

            {/* What's Included */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-stone-900">
                  Whats Included
                </h3>
                <Button
                  onClick={addIncluded}
                  size="sm"
                  variant="outline"
                  className="h-8"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
              {formData.included.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) =>
                      handleIncludedChange(index, e.target.value)
                    }
                    placeholder="Included item"
                    className="flex-1"
                  />
                  <Button
                    onClick={() => removeIncluded(index)}
                    size="sm"
                    variant="ghost"
                    className="h-10 w-10 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <Separator />

            {/* Investment */}
            <div className="space-y-4">
              <h3 className="font-medium text-stone-900">Investment Summary</h3>
              <div>
                <Label>Total Investment (₹)</Label>
                <Input
                  value={formData.totalInvestment}
                  onChange={(e) =>
                    handleChange("totalInvestment", e.target.value)
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Down Payment (₹)</Label>
                <Input
                  value={formData.downPayment}
                  onChange={(e) => handleChange("downPayment", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <Separator />

            {/* Payment Schedule */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-stone-900">Payment Schedule</h3>
                <Button
                  onClick={addPayment}
                  size="sm"
                  variant="outline"
                  className="h-8"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
              {formData.payments.map((payment, index) => (
                <Card key={index} className="p-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <Label className="text-xs text-stone-600">
                        Payment {index + 1}
                      </Label>
                      <Button
                        onClick={() => removePayment(index)}
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <Input
                      placeholder="Label"
                      value={payment.label}
                      onChange={(e) =>
                        handlePaymentChange(index, "label", e.target.value)
                      }
                      className="text-sm"
                    />
                    <Input
                      placeholder="Amount (₹)"
                      value={payment.amount}
                      onChange={(e) =>
                        handlePaymentChange(index, "amount", e.target.value)
                      }
                      className="text-sm"
                    />
                  </div>
                </Card>
              ))}
            </div>

            <Separator />

            {/* Download Button */}
            <Button
              onClick={downloadPDF}
              disabled={loading}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white"
              size="lg"
            >
              {loading ? (
                "Generating PDF..."
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel - A4 Preview */}
      <div className="flex-1 min-h-screen overflow-y-auto bg-stone-100 p-8">
        <div
          style={{ transform: "scale(0.85)", transformOrigin: "top center" }}
        >
          <div
            id="a4-document"
            className="bg-[#FDFBF7] shadow-2xl"
            style={{
              width: "794px",
              minHeight: "1123px",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            {/* Header with Background */}
            <div
              className="relative h-40 bg-cover bg-center flex flex-col items-center justify-center bg-[url(https://images.unsplash.com/photo-1769038933441-2457038f8dda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDB8fHx8MTc3NTI2NTEwOXww&ixlib=rb-4.1.0&q=85)]"
              style={{
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(139, 116, 95, 0.7)",
              }}
            >
              <div className="text-center z-10 text-white">
                <h1
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {formData.tagline}
                </h1>
                <p
                  className="text-xl font-semibold tracking-[0.2em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {formData.brandName}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="px-12 py-8 space-y-6">
              {/* Client Details */}
              <div className="space-y-2 text-stone-900">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-600 font-outfit">
                    Client:
                  </span>
                  <span className="text-lg font-playfair font-semibold">
                    {formData.clientName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-stone-600" />
                  <span className="font-medium text-stone-600 font-outfit">
                    Event:
                  </span>
                  <span className="font-outfit">{formData.event}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-stone-600" />
                  <span className="font-medium text-stone-600 font-outfit">
                    Location:
                  </span>
                  <span className="font-outfit">{formData.location}</span>
                </div>
              </div>

              {/* Programs Covered */}
              <div className="mt-8">
                <h2
                  className="text-2xl mb-4 flex items-center gap-2 text-stone-900"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                  }}
                >
                  <span className="text-amber-700 text-2xl">✦</span> Programs
                  Covered
                </h2>
                <div className="overflow-hidden rounded-lg border border-stone-300">
                  <table className="w-full text-sm font-outfit">
                    <thead>
                      <tr className="bg-amber-700 text-white">
                        <th className="px-3 py-2 text-left font-semibold">
                          Date
                        </th>
                        <th className="px-3 py-2 text-left font-semibold">
                          Side
                        </th>
                        <th className="px-3 py-2 text-left font-semibold">
                          Type of Photography
                        </th>
                        <th className="px-3 py-2 text-left font-semibold">
                          Location
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.programs.map((program, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-stone-50" : "bg-white"
                          }
                        >
                          <td className="px-3 py-2 border-t border-stone-200">
                            {program.day}
                          </td>
                          <td className="px-3 py-2 border-t border-stone-200">
                            {program.side.charAt(0).toUpperCase() + program.side.slice(1)}
                          </td>
                          <td className="px-3 py-2 border-t border-stone-200">
                            {program.type}
                          </td>
                          <td className="px-3 py-2 border-t border-stone-200">
                            {program.locations}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* What's Included */}
              <div className="mt-6">
                <h2
                  className="text-xl mb-3 flex items-center gap-2 text-stone-900"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  <span className="text-amber-700">✦</span> Whats Included
                </h2>
                <ul className="space-y-2 font-outfit">
                  {formData.included.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-stone-700"
                    >
                      <span className="text-amber-700 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment & Payment */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                {/* Investment Summary */}
                <div>
                  <h3
                    className="text-lg mb-3 flex items-center gap-2 text-stone-900"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    <span className="text-amber-700">✦</span> Investment Summary
                  </h3>
                  <div className="bg-amber-700 text-white p-3 rounded-lg mb-2 font-outfit">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Investment:</span>
                      <span className="text-xl font-bold">
                        ₹{formData.totalInvestment}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white border border-stone-300 p-3 rounded-lg font-outfit">
                    <div className="flex justify-between items-center text-stone-700">
                      <span>Down Payment:</span>
                      <span>₹{formData.downPayment}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Schedule */}
                <div>
                  <h3
                    className="text-lg mb-3 text-stone-900"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 600,
                    }}
                  >
                    Payment Schedule
                  </h3>
                  <div className="space-y-2 font-outfit">
                    {formData.payments.map((payment, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center bg-white border border-stone-200 p-2 rounded text-sm text-stone-700"
                      >
                        <span>{payment.label}</span>
                        <span className="font-semibold">₹{payment.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 pt-6 border-t border-stone-300">
                <div
                  className="text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  <p className="text-2xl font-semibold italic text-amber-700">
                    {formData.brandName}
                  </p>
                  <p className="text-sm text-stone-600 mt-1 font-outfit">
                    Team {formData.brandName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractGenerator;

