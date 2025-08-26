import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';
import { Save, Calendar } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function Step04Declaration({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    date: '',
    authorized: true,
    accurateInfo: true
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
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
    <div className="w-full max-w-[1240px] mx-auto space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-[#004EEB]">Declaration</h1>
        <p className="text-lg text-[#535862]">
          These questions cover key compliance checks (AML, sanctions, licensing). They are required to meet 
          regulatory standards and ensure safe, transparent business relationships.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-2xl p-8 space-y-6">
        {/* Declaration Text */}
        <div className="text-base text-[#181D27] leading-6">
          I/We "1111" confirm to Open Mineral AG, Lindenstrasse 4, 6340 Baar, Switzerland, that the foregoing information is true and all the documents provided are up-to-date. The Company shall comply in all respects with all laws to which it may be subject, including, but without limitation, as far as applicable, the laws against anti-money laundering, anti-corruption, and terrorism, as well as any trade, economic or financial sanctions laws, regulations, embargoes or restrictive measures administered, enacted or enforced by:
          <br />• the Security Council of the United Nations
          <br />• the United States of America
          <br />• the European Union
          <br />• Switzerland
          <br />• the United Kingdom
          <br />• and the governments and official institutions or agencies of any paragraphs (i) to (v) above, including OFAC, the US Department of State, Her Majesty's Treasury (HRMC-UK), and the State Secretariat for Economic Affairs of Switzerland (SECO).
        </div>

        {/* Input Fields */}
        <div className="flex gap-8">
          {/* Full Name */}
          <div className="flex-1 space-y-1.5">
            <Label htmlFor="fullName" className="text-sm font-semibold text-[#414651]">
              Full Name <span className="text-[#155EEF]">*</span>
            </Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="h-10 border-[#D5D7DA] shadow-sm"
              placeholder=""
            />
          </div>

          {/* Position */}
          <div className="flex-1 space-y-1.5">
            <Label htmlFor="position" className="text-sm font-semibold text-[#414651]">
              Position In The Company <span className="text-[#155EEF]">*</span>
            </Label>
            <Input
              id="position"
              value={formData.position}
              onChange={(e) => handleInputChange('position', e.target.value)}
              className="h-10 border-[#D5D7DA] shadow-sm"
              placeholder=""
            />
          </div>

          {/* Date */}
          <div className="flex-1 space-y-1.5">
            <Label htmlFor="date" className="text-sm font-semibold text-[#414651]">
              Date <span className="text-[#155EEF]">*</span>
            </Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="h-10 border-[#D5D7DA] shadow-sm pr-10"
                placeholder=""
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#717680]" />
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          {/* First Checkbox */}
          <div className="flex items-start gap-4">
            <Checkbox
              id="authorized"
              checked={formData.authorized}
              onCheckedChange={(checked) => handleCheckboxChange('authorized', checked as boolean)}
              className="mt-0.5 w-[18px] h-[18px] border-[#155EEF] data-[state=checked]:bg-[#155EEF] data-[state=checked]:text-white"
            />
            <Label htmlFor="authorized" className="text-base text-[#181D27] leading-6 cursor-pointer">
              I hereby state that I am authorized by my company to share this information and that it is accurate and true.
            </Label>
          </div>

          {/* Second Checkbox */}
          <div className="flex items-start gap-4">
            <Checkbox
              id="accurateInfo"
              checked={formData.accurateInfo}
              onCheckedChange={(checked) => handleCheckboxChange('accurateInfo', checked as boolean)}
              className="mt-0.5 w-[18px] h-[18px] border-[#155EEF] data-[state=checked]:bg-[#155EEF] data-[state=checked]:text-white"
            />
            <Label htmlFor="accurateInfo" className="text-base text-[#414651] leading-6 cursor-pointer">
              I/We hereby declare that the information given above is true and accurate as of date of writing. 
              I/We undertake to automatically inform Open Mineral of any material changes
            </Label>
          </div>
        </div>
      </div>

      {/* Section Footer */}
      <div className="border-t border-[#E9EAEB] pt-5 pb-6 px-[100px]">
        <div className="flex justify-between items-center">
          {/* Save For Later Button */}
          <Button
            variant="outline"
            onClick={handleSaveForLater}
            className="h-8 px-3 text-sm font-semibold text-[#414651] border-[#D5D7DA] hover:bg-gray-50"
          >
            <Save className="w-4 h-4 mr-2" />
            Save For Later
          </Button>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep}
              className="h-10 px-[14px] text-sm font-semibold text-[#414651] border-[#D5D7DA] hover:bg-gray-50"
            >
              Back
            </Button>
            <Button
              onClick={handleSaveAndContinue}
              className="h-10 px-[14px] text-sm font-semibold bg-[#155EEF] hover:bg-[#1348d1] border-[#155EEF] text-white"
            >
              {isLastStep ? 'Submit Application' : 'Save & Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
