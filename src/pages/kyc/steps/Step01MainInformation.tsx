import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { Calendar, FileText, HelpCircle, Save } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface FormData {
  relationshipWithOpenMineral: string[];
  fullCompanyLegalName: string;
  companyLegalNameNative: string;
  companyLegalType: string;
  companyRegistrationNumber: string;
  dateOfIncorporation: string;
  businessSegment: string;
  annualTurnover: string;
  companyClassification: string;
  taxResidence: string;
  taxIdNumber: string;
  countryOfIncorporation: string;
  businessOfficeAddress: string;
  registeredOfficeAddress: string;
  companyWebsiteLink: string;
  officialRegistryLink: string;
  businessDescription: string;
}

export function Step01MainInformation({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  const [formData, setFormData] = useState<FormData>({
    relationshipWithOpenMineral: [],
    fullCompanyLegalName: '',
    companyLegalNameNative: '',
    companyLegalType: '',
    companyRegistrationNumber: '',
    dateOfIncorporation: '',
    businessSegment: '',
    annualTurnover: '',
    companyClassification: '',
    taxResidence: '',
    taxIdNumber: '',
    countryOfIncorporation: '',
    businessOfficeAddress: '',
    registeredOfficeAddress: '',
    companyWebsiteLink: '',
    officialRegistryLink: '',
    businessDescription: '',
  });

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      relationshipWithOpenMineral: checked 
        ? [...prev.relationshipWithOpenMineral, value]
        : prev.relationshipWithOpenMineral.filter(item => item !== value)
    }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveForLater = () => {
    console.log('Save for later:', formData);
  };

  const handleBack = () => {
    onPrevious();
  };

  const handleSaveAndContinue = () => {
    console.log('Save and continue:', formData);
    onNext();
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-12 py-10 space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-[#181D27]">Main Information</h1>
        <p className="text-lg text-[#535862]">
          Please provide the official details of your Company as registered with the authorities. 
          We use this to confirm your identity and set up your profile.
        </p>
      </div>

      <div className="space-y-10">
        {/* Company Details Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[#181D27] mb-5">Company details</h2>
          </div>

          <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-2xl p-8 space-y-6">
            {/* Relationship with Open Mineral */}
            <div className="space-y-4">
              <Label className="text-sm font-semibold text-[#414651]">Relationship with Open Mineral</Label>
              <div className="flex flex-wrap gap-6">
                {['Trading Partner', 'Trading Financing Applicant', 'Service provider'].map((option) => (
                  <div key={option} className="flex items-center gap-4">
                    <Checkbox 
                      id={option}
                      checked={formData.relationshipWithOpenMineral.includes(option)}
                      onCheckedChange={(checked) => handleCheckboxChange(option, !!checked)}
                      className="w-[18px] h-[18px] border-[#D5D7DA] rounded-[9px]"
                    />
                    <Label htmlFor={option} className="text-base text-[#414651] cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Name Fields */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Full Company Legal Name
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Input
                  value={formData.fullCompanyLegalName}
                  onChange={(e) => handleInputChange('fullCompanyLegalName', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651]">
                  Company Legal Name In Native Language (if different)
                </Label>
                <Input
                  value={formData.companyLegalNameNative}
                  onChange={(e) => handleInputChange('companyLegalNameNative', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Company Type and Registration */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Company Legal Type
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.companyLegalType} onValueChange={(value) => handleInputChange('companyLegalType', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="llc">LLC</SelectItem>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Company Registration Number
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Input
                  value={formData.companyRegistrationNumber}
                  onChange={(e) => handleInputChange('companyRegistrationNumber', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Date and Business Segment */}
            <div className="grid grid-cols-2 gap-[34px]">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Date Of Incorporation
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <div className="relative">
                  <Input
                    value={formData.dateOfIncorporation}
                    onChange={(e) => handleInputChange('dateOfIncorporation', e.target.value)}
                    placeholder="DD.MM.YYYY"
                    className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717680]" />
                </div>
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Business Segment
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.businessSegment} onValueChange={(value) => handleInputChange('businessSegment', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mining">Mining</SelectItem>
                    <SelectItem value="trading">Trading</SelectItem>
                    <SelectItem value="logistics">Logistics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Turnover and Classification */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Annual Turnover/Sales USD
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.annualTurnover} onValueChange={(value) => handleInputChange('annualTurnover', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1m">Under $1M</SelectItem>
                    <SelectItem value="1m-10m">$1M - $10M</SelectItem>
                    <SelectItem value="10m-100m">$10M - $100M</SelectItem>
                    <SelectItem value="over-100m">Over $100M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Company Classification
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.companyClassification} onValueChange={(value) => handleInputChange('companyClassification', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Tax Fields */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Tax Residence
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.taxResidence} onValueChange={(value) => handleInputChange('taxResidence', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651]">
                  Tax ID/Number
                </Label>
                <Input
                  value={formData.taxIdNumber}
                  onChange={(e) => handleInputChange('taxIdNumber', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Document Info Box */}
          <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-xl p-8 flex gap-3">
            <FileText className="w-5 h-5 text-[#535862] mt-0.5 flex-shrink-0" />
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#717680]">
                Documents required for each UBO (to be added later in the section Company Documents):
              </p>
              <p className="text-sm font-semibold text-[#717680]">
                A valid passport or national ID (photo page)
                <br />
                A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
              </p>
            </div>
          </div>
        </div>

        {/* Company Address Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[#181D27]">Company address</h2>
          </div>

          <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Country Of Incorporation
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Select value={formData.countryOfIncorporation} onValueChange={(value) => handleInputChange('countryOfIncorporation', value)}>
                  <SelectTrigger className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651]">
                  Business Office Address (optional)
                </Label>
                <Input
                  value={formData.businessOfficeAddress}
                  onChange={(e) => handleInputChange('businessOfficeAddress', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-1">
                  Registered Office Address
                  <span className="text-[#155EEF]">*</span>
                </Label>
                <Input
                  value={formData.registeredOfficeAddress}
                  onChange={(e) => handleInputChange('registeredOfficeAddress', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-6">
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-[#181D27]">Additional Information</h2>
            
            <div className="bg-[#EFF4FF] border border-[#2970FF] rounded-xl p-8">
              <p className="text-sm text-[#004EEB]">
                Provide extra details that help us understand and verify your business. 
                This section is mandatory for Trading Partners and Trade Finance Applicants.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-2xl p-8 space-y-6">
              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651]">
                  Company Website Link
                </Label>
                <Input
                  value={formData.companyWebsiteLink}
                  onChange={(e) => handleInputChange('companyWebsiteLink', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651]">
                  Official registry link (government or company registration portal)
                </Label>
                <Input
                  value={formData.officialRegistryLink}
                  onChange={(e) => handleInputChange('officialRegistryLink', e.target.value)}
                  className="h-10 bg-white border-[#D5D7DA] rounded-lg shadow-sm"
                />
              </div>

              <div className="space-y-[6px]">
                <Label className="text-sm font-semibold text-[#414651] flex items-center gap-2">
                  Brief Business Description And Core Business Activities
                  <HelpCircle className="w-4 h-4 text-[#717680]" />
                </Label>
                <div className="relative">
                  <Textarea
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                    className="min-h-[180px] bg-white border-[#D5D7DA] rounded-lg shadow-sm resize-none"
                  />
                  <div className="absolute bottom-3 right-3 w-3 h-3">
                    <div className="w-2 h-2 border-r border-b border-[#D5D7DA]"></div>
                    <div className="w-1 h-1 border-r border-b border-[#D5D7DA] ml-[5px] mt-[5px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Info Box 2 */}
            <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-xl p-8 flex gap-3">
              <FileText className="w-5 h-5 text-[#535862] mt-0.5 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#717680]">
                  Documents required for each UBO (to be added later in the section Company Documents):
                </p>
                <p className="text-sm font-semibold text-[#717680]">
                  A valid passport or national ID (photo page)
                  <br />
                  A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#E9EAEB] pt-5 px-[100px] pb-6">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handleSaveForLater}
            className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#414651] border-[#D5D7DA] bg-white hover:bg-gray-50"
          >
            <Save className="w-4 h-4" />
            Save For Later
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep}
              className="px-[14px] py-[10px] text-sm font-semibold text-[#414651] border-[#D5D7DA] bg-white hover:bg-gray-50"
            >
              Back
            </Button>
            <Button
              onClick={handleSaveAndContinue}
              className="px-[14px] py-[10px] text-sm font-semibold text-white bg-[#155EEF] hover:bg-[#004EEB] border-0"
            >
              {isLastStep ? 'Submit Application' : 'Save & Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
