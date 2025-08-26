import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { FileText } from 'lucide-react'

interface WelcomeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept: () => void
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  open,
  onOpenChange,
  onAccept,
}) => {
  const handleAccept = () => {
    onAccept()
    onOpenChange(false)
  }

  const applicationSteps = [
    {
      title: "Main Information",
      description: "Basic company details: legal name, type, registration number, incorporation date, business segment, turnover, tax residence, office address, website, and business description"
    },
    {
      title: "Company Principals",
      description: "Details of Signatories, Shareholders, and UBOs: names, positions, contacts, IDs, addresses, and shareholding %"
    },
    {
      title: "Compliance & Risk Сheck",
      description: "Questions on PEP status, sanctions, AML/CFT & anti-bribery policies, licensing, and internal procedures"
    },
    {
      title: "Declaration",
      description: "An authorised person enters their name, position, date, and signs"
    },
    {
      title: "Review and confirm your KYC application",
      description: "Check all information before submission"
    }
  ]

  const companyDocuments = [
    "Incorporation/Registration certificate",
    "Articles/Memorandum of Association or Charter",
    "Signed Shareholding Structure chart with Ultimate Beneficial Ownership",
    "Document confirming authority of persons authorized to sign transactions/contracts",
    "Copy Passport/ID of CEO, Director(s), & Shareholder(s) holding >10% ownership, Passport/ID of UBOs",
    "Copy or online extract of the Chamber of Commerce or trade register extract (not older than 6 months)"
  ]

  const confirmationText = `Dear Sir/Madam,
Open Mineral AG ("Open Mineral" or "we") may collect, process, store, and transfer personal data relating to you for the purpose of:
carrying out Open Mineral's internal due diligence process,
customer identification and/or onboarding procedures (KYC),
complying with applicable legal and/or regulatory requirements,
or for quality review purposes.
Please note that without the requested information, we will not be able to carry out the above procedures or comply with our legal and/or regulatory obligations.

Kindly note that:
Data protection terms will be included in the general business terms upon our mutual agreement to proceed with the proposed cooperation.
Any personal data collected in this form will be retained solely for the purpose of carrying out our relationship.
Yours sincerely,

Open Mineral AG`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-[32px] border border-gray-200 p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-5 w-full">
          {/* Logo/Image placeholder */}
          <div className="w-[108px] h-[60px] bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-sm font-medium text-blue-800">Logo</span>
          </div>
          
          {/* Page Header */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-center">
              <DialogTitle className="text-4xl font-medium text-gray-900 tracking-tight">
                Welcome to Open Mineral
              </DialogTitle>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8 w-full">
          {/* Left Side - Application Flow */}
          <div className="flex-1">
            <Card className="p-6 border border-gray-200 rounded-[24px]">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Application flow</h3>
              </div>
              
              <div className="space-y-0">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex gap-3 relative">
                    {/* Step Circle */}
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border-[1.5px] border-gray-300 bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      </div>
                      {/* Connector Line */}
                      {index < applicationSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 mt-1"></div>
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Company Documents Section */}
                <div className="flex gap-3 mt-0">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-[1.5px] border-gray-300 bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Company Documents
                    </h4>
                    <div className="space-y-2">
                      {companyDocuments.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-600 flex-shrink-0" strokeWidth={2} />
                          <span className="text-sm text-gray-600 leading-5">
                            {doc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Confirmation Note */}
          <div className="w-[480px]">
            <Card className="p-6 h-full border border-gray-200 rounded-[24px] flex flex-col">
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Confirmation note</h3>
                </div>
                
                <div className="mb-16">
                  <p className="text-sm text-gray-600 leading-5 whitespace-pre-line">
                    {confirmationText}
                  </p>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="space-y-3">
                <Button 
                  onClick={handleAccept}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3 h-auto rounded-lg shadow-sm border-2 border-transparent hover:border-blue-800 transition-all duration-200"
                >
                  Accept and Start Application
                </Button>
                <p className="text-sm text-gray-600 leading-5">
                  * To learn more about our personal data processing practices, please check our Privacy Notice here:[Open Mineral Privacy Notice – Open Mineral]
                </p>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
