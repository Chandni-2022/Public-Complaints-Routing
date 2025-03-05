"use client"
import React from 'react';  
import { useState } from "react"
import { Search, List, Grid, LayoutGrid, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ComplaintStats } from "./complaint-stats"
import { ComplaintTable } from "./complaint-table"
import { ComplaintList } from "./complaint-list"
import { ComplaintGrid } from "./complaint-grid"
import { RegisterComplaintForm } from "./register-complaint-form"
import { complaintsData as initialComplaintsData } from "@/data/complaints"
import type { Complaint } from "./../types/complaint"

type ViewType = "table" | "list" | "grid"

export default function ComplaintsDashboard() {
  const [activeTab, setActiveTab] = useState("all")
  const [viewType, setViewType] = useState<ViewType>("table")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [complaintsData, setComplaintsData] = useState<Complaint[]>(initialComplaintsData)
  const [selectedLocation, setSelectedLocation] = useState("all-locations")
  const [selectedCategory, setSelectedCategory] = useState("all-categories")

  // Add new complaint
  const addComplaint = (newComplaint: Omit<Complaint, "id">) => {
    const newId = complaintsData.length > 0 ? Math.max(...complaintsData.map((c) => c.id)) + 1 : 1
    const complaintWithId: Complaint = {
      ...newComplaint,
      id: newId,
    }

    setComplaintsData((prev) => [complaintWithId, ...prev])
    setIsDialogOpen(false)
  }

  // Filter complaints based on all filters
  const filteredComplaints = complaintsData.filter((complaint) => {
    // Filter by status (tab)
    if (activeTab !== "all" && complaint.status.toLowerCase() !== activeTab.toLowerCase()) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !Object.values(complaint).some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    ) {
      return false
    }

    // Filter by location
    if (selectedLocation !== "all-locations" && complaint.location !== selectedLocation) {
      return false
    }

    // Filter by category
    if (selectedCategory !== "all-categories" && complaint.category !== selectedCategory) {
      return false
    }

    return true
  })

  const totalComplaints = complaintsData.length
  const totalFilteredComplaints = filteredComplaints.length
  const totalPages = Math.ceil(totalFilteredComplaints / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = Math.min(startIndex + rowsPerPage, totalFilteredComplaints)
  const paginatedComplaints = filteredComplaints.slice(
    startIndex,
    Math.min(startIndex + rowsPerPage, filteredComplaints.length),
  )

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <div className="min-h-screen bg-background bg-white text-black">
      <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Public Complaint System</h1>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Guidelines
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <Button variant="secondary" className="ml-4">
            Login
          </Button>
        </nav>
      </header>

      <main className="container mx-auto p-6 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl text-white font-bold">Complaints Dashboard</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="mr-2 h-4 w-4 text-white" /> 
               New Complaint Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-white text-black">
              <DialogHeader>
                <DialogTitle>Register New Complaint</DialogTitle>
              </DialogHeader>
              <RegisterComplaintForm onSuccess={addComplaint}  />
            </DialogContent>
          </Dialog>
        </div>

        <ComplaintStats
          total={totalComplaints}
          pending={complaintsData.filter((c) => c.status === "Pending").length}
          inProgress={complaintsData.filter((c) => c.status === "In Progress").length}
          resolved={complaintsData.filter((c) => c.status === "Resolved").length}
        />

        <Tabs
          defaultValue="all"
          className="mb-6"
          onValueChange={(value) => {
            setActiveTab(value)
            setCurrentPage(1) // Reset to first page when changing tabs
          }}
        >
          <TabsList className="bg-gray-100 p-1 rounded-md">
            <TabsTrigger value="all" className={`rounded-md ${activeTab === "all" ? "bg-blue-600 text-white" : ""}`}>
              All
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className={`rounded-md ${activeTab === "pending" ? "bg-blue-600 text-white" : ""}`}
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="in progress"
              className={`rounded-md ${activeTab === "in progress" ? "bg-blue-600 text-white" : ""}`}
            >
              In Progress
            </TabsTrigger>
            <TabsTrigger
              value="resolved"
              className={`rounded-md ${activeTab === "resolved" ? "bg-blue-600 text-white" : ""}`}
            >
              Resolved
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search complaints..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1) // Reset to first page when searching
              }}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <Select
              value={selectedLocation}
              onValueChange={(value) => {
                setSelectedLocation(value)
                setCurrentPage(1) // Reset to first page when changing location
              }}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-locations">All Locations</SelectItem>
                <SelectItem value="East Zone">East Zone</SelectItem>
                <SelectItem value="West Zone">West Zone</SelectItem>
                <SelectItem value="North Zone">North Zone</SelectItem>
                <SelectItem value="South Zone">South Zone</SelectItem>
                <SelectItem value="Central Zone">Central Zone</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value)
                setCurrentPage(1) // Reset to first page when changing category
              }}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="Electricity">Electricity</SelectItem>
                <SelectItem value="Sanitation">Sanitation</SelectItem>
                <SelectItem value="Roads">Roads</SelectItem>
                <SelectItem value="Water Supply">Water Supply</SelectItem>
                <SelectItem value="Public Transport">Public Transport</SelectItem>
                <SelectItem value="Garbage">Garbage</SelectItem>
                <SelectItem value="Street Lights">Street Lights</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center border rounded-md overflow-hidden">
              <Button
                variant={viewType === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewType("list")}
                className={viewType === "list" ? "bg-blue-600" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === "table" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewType("table")}
                className={viewType === "table" ? "bg-blue-600" : ""}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewType("grid")}
                className={viewType === "grid" ? "bg-blue-600" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pagination controls moved below filters */}
        <div className="flex items-center justify-between px-4 py-3 mb-4 border rounded-lg bg-gray-50">
          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Showing {filteredComplaints.length > 0 ? startIndex + 1 : 0} to {endIndex} of {totalFilteredComplaints}{" "}
            complaints
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Rows per page:</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setRowsPerPage(Number.parseInt(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-16 h-8">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {paginatedComplaints.length > 0 ? (
          <>
            {viewType === "table" && <ComplaintTable complaints={paginatedComplaints} />}

            {viewType === "list" && <ComplaintList complaints={paginatedComplaints} />}

            {viewType === "grid" && <ComplaintGrid complaints={paginatedComplaints} />}
          </>
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-lg text-gray-500">No complaints found matching your filters.</p>
            <Button
              variant="link"
              className="mt-2 text-blue-600"
              onClick={() => {
                setSearchQuery("")
                setSelectedLocation("all-locations")
                setSelectedCategory("all-categories")
                setActiveTab("all")
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Pagination navigation moved to bottom */}
        {filteredComplaints.length > 0 && (
          <div className="flex justify-center mt-6 mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-r-none"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Page {currentPage} of {totalPages || 1}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-l-none border-l-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </main>
      <footer className="mt-8 bg-blue-600 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>© 2025 Public Complaint System. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

