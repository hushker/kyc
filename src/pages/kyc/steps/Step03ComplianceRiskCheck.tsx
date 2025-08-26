import { useState } from 'react';
import { FileText, Save } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface ComplianceAnswers {
  pepStatus: boolean | null;
  sanctions: boolean | null;
  sanctionsPolicy: boolean | null;
  amlPolicies: boolean | null;
  regulated: boolean | null;
  childLabour: boolean | null;
  supplierStandards: boolean | null;
}

export function Step03ComplianceRiskCheck({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  const [answers, setAnswers] = useState<ComplianceAnswers>({
    pepStatus: null,
    sanctions: null,
    sanctionsPolicy: null,
    amlPolicies: null,
    regulated: null,
    childLabour: null,
    supplierStandards: null,
  });

  const handleAnswerChange = (question: keyof ComplianceAnswers, value: boolean) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const questions = [
    {
      id: 'pepStatus' as keyof ComplianceAnswers,
      text: 'Is any company principal a Politically Exposed Person (PEP)?'
    },
    {
      id: 'sanctions' as keyof ComplianceAnswers,
      text: 'Is any company principal subject to sanctions by the USA, EU, UK, Switzerland, or the UN?'
    },
    {
      id: 'sanctionsPolicy' as keyof ComplianceAnswers,
      text: 'Does the company have a policy for managing sanctions compliance?'
    },
    {
      id: 'amlPolicies' as keyof ComplianceAnswers,
      text: 'Does the company have AML/CFT or anti-bribery policies in place?'
    },
    {
      id: 'regulated' as keyof ComplianceAnswers,
      text: 'Is the company regulated and does it require a license to operate?'
    },
    {
      id: 'childLabour' as keyof ComplianceAnswers,
      text: 'Does the company follow international standards on child labour prevention and supply chain due diligence (e.g. ILO Conventions 138 & 182, UN Guiding Principles, OECD Guidelines)?'
    },
    {
      id: 'supplierStandards' as keyof ComplianceAnswers,
      text: 'Does the company confirm its commitment to comply with our Supplier Standards?'
    }
  ];

  return (
    <div className="max-w-[1240px] mx-auto space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-[#004EEB]">
          Compliance & Risk Questionnaire
        </h1>
        <p className="text-lg text-[#535862]">
          These questions cover key compliance checks (AML, sanctions, licensing). They are required to meet regulatory standards and ensure safe, transparent business relationships.
        </p>
      </div>

      {/* Questions Container */}
      <div className="space-y-5">
        {/* Main Questionnaire */}
        <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-2xl p-8 space-y-6">
          {questions.map((question, index) => (
            <div key={question.id}>
              <div className="flex justify-between items-center gap-10">
                <p className="text-base font-medium text-[#414651] flex-1 max-w-[900px]">
                  {question.text}
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-4 w-[60px] justify-center">
                    <Checkbox
                      id={`${question.id}-yes`}
                      checked={answers[question.id] === true}
                      onCheckedChange={() => handleAnswerChange(question.id, true)}
                      className="w-[18px] h-[18px] rounded-[9px] border-[#D5D7DA] data-[state=checked]:bg-[#155EEF] data-[state=checked]:border-[#155EEF]"
                    />
                    <label 
                      htmlFor={`${question.id}-yes`}
                      className="text-base font-semibold text-[#414651] cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-4 w-[60px] justify-center">
                    <Checkbox
                      id={`${question.id}-no`}
                      checked={answers[question.id] === false}
                      onCheckedChange={() => handleAnswerChange(question.id, false)}
                      className="w-[18px] h-[18px] rounded-[9px] border-[#D5D7DA] data-[state=checked]:bg-[#155EEF] data-[state=checked]:border-[#155EEF]"
                    />
                    <label 
                      htmlFor={`${question.id}-no`}
                      className="text-base font-normal text-[#414651] cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              {index < questions.length - 1 && (
                <hr className="border-[#E9EAEB] mt-6" />
              )}
            </div>
          ))}
        </div>

        {/* Documents Info Box */}
        <div className="bg-[#FAFAFA] border border-[#D5D7DA] rounded-xl p-8 flex gap-3">
          <FileText className="w-5 h-5 text-[#535862] mt-0.5 flex-shrink-0" />
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#717680]">
              Documents required for each UBO (to be added later in the section Company Documents):
            </p>
            <p className="text-sm font-semibold text-[#717680]">
              A valid passport or national ID (photo page)<br/>
              A proof of residential address (e.g. utility bill or bank statement issued within the last 6 months)
            </p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="border-t border-[#E9EAEB] pt-5">
        <div className="flex justify-between items-center px-[100px]">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white border-[#D5D7DA] text-[#414651] font-semibold text-sm px-3 py-2 h-auto shadow-sm hover:bg-gray-50"
          >
            <Save className="w-4 h-4 mr-2" />
            Save For Later
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="default" 
              onClick={onPrevious}
              disabled={isFirstStep}
              className="bg-white border-[#D5D7DA] text-[#414651] font-semibold px-[14px] py-[10px] h-auto shadow-sm hover:bg-gray-50"
            >
              Back
            </Button>
            <Button 
              size="default"
              onClick={onNext}
              className="bg-[#155EEF] border-2 border-white/[0.12] text-white font-semibold px-[14px] py-[10px] h-auto shadow-sm hover:bg-[#1952cc]"
            >
              {isLastStep ? 'Submit Application' : 'Save & Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
