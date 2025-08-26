import React, { useState } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';
import { Plus, FileText, Save } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface Principal {
  id: string;
  fullName: string;
  aliasName: string;
  nationality: string;
  position: string;
  email: string;
  phone: string;
}

interface Shareholder {
  id: string;
  type: 'individual' | 'company';
  fullName: string;
  position: string;
  country: string;
  address: string;
  dateOfBirth: string;
  idPassport: string;
  shareholding: string;
}

interface UBO {
  id: string;
  fullName: string;
  position: string;
  country: string;
  address: string;
  dateOfBirth: string;
  idPassport: string;
  shareholding: string;
}

export function Step02CompanyPrincipals({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  const [principals, setPrincipals] = useState<Principal[]>([]);
  const [shareholders, setShareholders] = useState<Shareholder[]>([]);
  const [ubos, setUbos] = useState<UBO[]>([]);
  const [shareholderType, setShareholderType] = useState<'individual' | 'company'>('individual');

  const addPrincipal = () => {
    const newPrincipal: Principal = {
      id: Date.now().toString(),
      fullName: '',
      aliasName: '',
      nationality: '',
      position: '',
      email: '',
      phone: ''
    };
    setPrincipals([...principals, newPrincipal]);
  };

  const addShareholder = () => {
    const newShareholder: Shareholder = {
      id: Date.now().toString(),
      type: shareholderType,
      fullName: '',
      position: '',
      country: '',
      address: '',
      dateOfBirth: '',
      idPassport: '',
      shareholding: ''
    };
    setShareholders([...shareholders, newShareholder]);
  };

  const addUbo = () => {
    const newUbo: UBO = {
      id: Date.now().toString(),
      fullName: '',
      position: '',
      country: '',
      address: '',
      dateOfBirth: '',
      idPassport: '',
      shareholding: ''
    };
    setUbos([...ubos, newUbo]);
  };

  const DocumentRequirementBox = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 flex gap-3">
      <FileText className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-blue-600">Company Principals</h1>
        <p className="text-lg text-gray-600">
          To meet regulatory requirements, we need you to provide details for all Company Principals of your entity. 
          There are three types of Principals we must capture, and we'll guide you step by step through each one.
        </p>
      </div>

      {/* Authorised Signatories Section */}
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">Authorised Signatories</h2>
        </div>
        
        <div className="space-y-5">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <p className="text-sm text-blue-800">
              List all individuals authorised to sign on behalf of your company. These are the people who can legally 
              represent the company in contracts and financial matters.
            </p>
          </div>

          <div className="space-y-5">
            {principals.map((principal, index) => (
              <Card key={principal.id} className="border border-gray-200 rounded-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor={`principal-name-${index}`}>
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={`principal-name-${index}`}
                        placeholder="Enter full name"
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`principal-alias-${index}`}>
                        Alias/Name In Native Language
                      </Label>
                      <Input
                        id={`principal-alias-${index}`}
                        placeholder="Enter alias name"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor={`principal-nationality-${index}`}>
                        Nationality <span className="text-red-500">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`principal-position-${index}`}>
                        Position <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={`principal-position-${index}`}
                        placeholder="Enter position"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor={`principal-email-${index}`}>
                        Corporate Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={`principal-email-${index}`}
                        type="email"
                        placeholder="Enter email address"
                        className="h-10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`principal-phone-${index}`}>
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id={`principal-phone-${index}`}
                        type="tel"
                        placeholder="Enter phone number"
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <Button variant="link" onClick={addPrincipal} className="text-blue-600 p-0 h-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Person
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {principals.length === 0 && (
              <Button variant="link" onClick={addPrincipal} className="text-blue-600 justify-start p-0 h-auto">
                <Plus className="h-4 w-4 mr-2" />
                Add Person
              </Button>
            )}

            <DocumentRequirementBox>
              <p className="text-sm font-semibold text-gray-700">
                Documents required for each UBO (to be added later in the section Company Documents):
              </p>
              <p className="text-sm text-gray-700">
                A valid passport or national ID (photo page)<br />
                A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
              </p>
            </DocumentRequirementBox>
          </div>
        </div>
      </div>

      {/* Shareholders Section */}
      <div className="space-y-6">
        <div className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-900">Shareholders</h2>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <p className="text-sm text-blue-800">
              List all shareholders of your Company, they can be individuals or legal entities. State the name of all 
              shareholders/partners/members who own more than 10% of the Company's shares or voting rights or names of any 
              individual(s) who otherwise exercise control over the management of the Company.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {shareholders.map((shareholder, index) => (
            <Card key={shareholder.id} className="border border-gray-200 rounded-xl">
              <CardContent className="p-8 space-y-6">
        <div className="space-y-4">
                  <Label className="text-sm font-semibold">What the type of shareholder?</Label>
                  <div className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`individual-${index}`}
                        checked={shareholderType === 'individual'}
                        onCheckedChange={() => setShareholderType('individual')}
                      />
                      <Label htmlFor={`individual-${index}`} className="text-base font-normal">
                        Individual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`company-${index}`}
                        checked={shareholderType === 'company'}
                        onCheckedChange={() => setShareholderType('company')}
                      />
                      <Label htmlFor={`company-${index}`} className="text-base font-normal">
                        Company
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Full Name/Full Company Name <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter full name" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Position In The Company <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter position" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Residential/Registrated Address <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter address" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Date Of Birth/Incorporation <span className="text-red-500">*</span>
                    </Label>
                    <Input type="date" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      ID/Passport/Registration <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter ID/Passport" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Shareholding % <span className="text-red-500">*</span>
                    </Label>
                    <Input type="number" placeholder="Enter percentage" className="h-10" />
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button variant="link" onClick={addShareholder} className="text-blue-600 p-0 h-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Shareholder
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {shareholders.length === 0 && (
            <Button variant="link" onClick={addShareholder} className="text-blue-600 justify-start p-0 h-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add Shareholder
            </Button>
          )}

          <DocumentRequirementBox>
            <p className="text-sm font-semibold text-gray-700">
              Documents required for each UBO (to be added later in the section Company Documents):
            </p>
            <p className="text-sm text-gray-700">
              A valid passport or national ID (photo page)<br />
              A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
            </p>
          </DocumentRequirementBox>
        </div>
      </div>

      {/* Ultimate Beneficial Owners Section */}
      <div className="space-y-6">
        <div className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-900">Ultimate Beneficial Owners (UBO)</h2>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
            <p className="text-sm text-blue-800">
              Provide details of all Ultimate Beneficial Owners (UBOs). These are the real people who ultimately control or benefit from the company:<br />
              Any natural person who controls* (in each case whether directly or indirectly) the Company; or, if there is no such person.<br />
              Any and all natural persons who owns (in each case whether directly or indirectly), 10% or more of the shares in the Company; or, if there is no such person<br />
              Any natural person who holds the position of officer (any member of the Company exercising functions under the members' agreement equivalent to the functions of the officers) of the Company.<br />
              Pro tip: If your company does not have a clear UBO (no individual owns 10% or more), provide details of the Directors, Trustees, or Other Individuals with equivalent authority.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {ubos.map((ubo) => (
            <Card key={ubo.id} className="border border-gray-200 rounded-xl">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      UBO Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter full name" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Position In The Company <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter position" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Country <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Residential Address <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter address" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Date Of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Input type="date" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      ID/Passport <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter ID/Passport" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label>
                      Shareholding % <span className="text-red-500">*</span>
                    </Label>
                    <Input type="number" placeholder="Enter percentage" className="h-10" />
                  </div>
                </div>

                <div className="flex justify-start">
                  <Button variant="link" onClick={addUbo} className="text-blue-600 p-0 h-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Add UBO
                  </Button>
        </div>
      </CardContent>
    </Card>
          ))}

          {ubos.length === 0 && (
            <Button variant="link" onClick={addUbo} className="text-blue-600 justify-start p-0 h-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add UBO
            </Button>
          )}

          <DocumentRequirementBox>
            <p className="text-sm font-semibold text-gray-700">
              Documents required for each UBO (to be added later in the section Company Documents):
            </p>
            <p className="text-sm text-gray-700">
              A valid passport or national ID (photo page)<br />
              A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
            </p>
          </DocumentRequirementBox>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-5">
        <div className="flex justify-between items-center">
          <Button variant="outline" className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save For Later
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={onPrevious}
              disabled={isFirstStep}
            >
              Back
            </Button>
            <Button onClick={onNext}>
              {isLastStep ? 'Submit Application' : 'Save & Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
