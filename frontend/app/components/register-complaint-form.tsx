"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { toast } from "@/components/ui/use-toast"
import type { Complaint } from "@/types/complaint"
import { Rocket } from "lucide-react";

interface RegisterComplaintFormProps {
  onSuccess: (complaint: Omit<Complaint, "id">) => void
}

export function RegisterComplaintForm({ onSuccess }: RegisterComplaintFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "This is a description for com...",
    location: "East Zone",
    category: "Electricity",
    criticality: "Low" as "Low" | "Medium" | "High",
    department: "Water Board",
    status: "Pending" as "Pending" | "In Progress" | "Resolved",
    image: "/placeholder.svg",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real app, we would upload the file to a server and get a URL back
      // For this demo, we'll just use a placeholder
      setFormData((prev) => ({ ...prev, image: "/placeholder.svg" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Determine department based on category if not set
      let department = formData.department
      if (!department) {
        switch (formData.category) {
          case "Electricity":
            department = "Electricity Board"
            break
          case "Water Supply":
            department = "Water Board"
            break
          case "Roads":
          case "Public Transport":
            department = "Transport"
            break
          case "Sanitation":
          case "Garbage":
            department = "Sanitation"
            break
          default:
            department = "Municipal"
        }
      }

      // Success - pass the new complaint to the parent component
      onSuccess({
        ...formData,
        department,
      })

      toast({
        title: "Complaint Registered",
        description: "Your complaint has been successfully registered.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error registering your complaint. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white text-black">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* <div className="space-y-2">
            <Label htmlFor="name">Complaint Title</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter a title for your complaint"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div> */}

          <div className="space-y-2">
            {/* <Label htmlFor="description">Description</Label> */}
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your complaint in detail"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select value={formData.location} onValueChange={(value) => handleSelectChange("location", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="East Zone">East Zone</SelectItem>
                <SelectItem value="West Zone">West Zone</SelectItem>
                <SelectItem value="North Zone">North Zone</SelectItem>
                <SelectItem value="South Zone">South Zone</SelectItem>
                <SelectItem value="Central Zone">Central Zone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Electricity">Electricity</SelectItem>
                <SelectItem value="Water Supply">Water Supply</SelectItem>
                <SelectItem value="Roads">Roads</SelectItem>
                <SelectItem value="Sanitation">Sanitation</SelectItem>
                <SelectItem value="Public Transport">Public Transport</SelectItem>
                <SelectItem value="Garbage">Garbage</SelectItem>
                <SelectItem value="Street Lights">Street Lights</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div> */}

        {/* <div className="space-y-2">
          <Label>Criticality</Label>
          <RadioGroup
            value={formData.criticality}
            onValueChange={(value: "Low" | "Medium" | "High") => handleSelectChange("criticality", value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Low" id="low" />
              <Label htmlFor="low" className="text-green-600">
                Low
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Medium" id="medium" />
              <Label htmlFor="medium" className="text-yellow-600">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="High" id="high" />
              <Label htmlFor="high" className="text-red-600">
                High
              </Label>
            </div>
          </RadioGroup>
        </div> */}

        {/* <div className="space-y-2">
          <Label>Status</Label>
          <RadioGroup
            value={formData.status}
            onValueChange={(value: "Pending" | "In Progress" | "Resolved") => handleSelectChange("status", value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Pending" id="pending" />
              <Label htmlFor="pending" className="text-yellow-600">
                Pending
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="In Progress" id="in-progress" />
              <Label htmlFor="in-progress" className="text-blue-600">
                In Progress
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Resolved" id="resolved" />
              <Label htmlFor="resolved" className="text-green-600">
                Resolved
              </Label>
            </div>
          </RadioGroup>
        </div> */}

        <div className="space-y-2">
          <Label htmlFor="image">Upload Image (Optional)</Label>
          <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />
          <p className="text-xs text-gray-700">Upload an image related to your complaint (max 5MB)</p>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        {/* <Button type="button" variant="outline" onClick={() => onSuccess(formData)}>
          Cancel
        </Button> */}
        {/* <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Complaint"}
        </Button> */}
        <Button
  type="submit"
  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    "Submitting..."
  ) : (
    <>
      <Rocket className="w-5 h-5" />
      Submit Complaint
    </>
  )}
</Button>
      </div>
    </form>
  )
}

