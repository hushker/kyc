import { useState, useEffect } from 'react';
import { WizardTabs, WizardStep } from '../../components/WizardTabs';
import { Button } from '../../components/ui/button';
import { WelcomeModal } from '../../components/WelcomeModal';
import { Step01MainInformation } from './steps/Step01MainInformation';
import { Step02CompanyPrincipals } from './steps/Step02CompanyPrincipals';
import { Step03ComplianceRiskCheck } from './steps/Step03ComplianceRiskCheck';
import { Step04Declaration } from './steps/Step04Declaration';
import { Step05ApplicationSummary } from './steps/Step05ApplicationSummary';
import { Step06CompanyDocuments } from './steps/Step06CompanyDocuments';

const wizardSteps: WizardStep[] = [
  {
    id: 'main-information',
    title: 'Main Information',
    status: 'current'
  },
  {
    id: 'company-principals',
    title: 'Company Principals',
    status: 'incomplete'
  },
  {
    id: 'compliance-risk-check',
    title: 'Compliance & Risk Check',
    status: 'incomplete'
  },
  {
    id: 'declaration',
    title: 'Declaration',
    status: 'incomplete'
  },
  {
    id: 'application-summary',
    title: 'Application Summary',
    status: 'incomplete'
  },
  {
    id: 'company-documents',
    title: 'Company Documents',
    status: 'incomplete'
  }
];

export function KycWizard() {
  const [currentStep, setCurrentStep] = useState('main-information');
  const [steps, setSteps] = useState(wizardSteps);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleStepChange = (stepId: string) => {
    setCurrentStep(stepId);
    
    // Update step statuses
    setSteps(prevSteps => 
      prevSteps.map((step, index) => {
        const targetIndex = prevSteps.findIndex(s => s.id === stepId);
        
        if (index < targetIndex) {
          return { ...step, status: 'complete' as const };
        } else if (index === targetIndex) {
          return { ...step, status: 'current' as const };
        } else {
          return { ...step, status: 'incomplete' as const };
        }
      })
    );
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!isLastStep) {
      const nextStep = steps[currentStepIndex + 1];
      handleStepChange(nextStep.id);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      const prevStep = steps[currentStepIndex - 1];
      handleStepChange(prevStep.id);
    }
  };

  const handleWelcomeAccept = () => {
    setShowWelcomeModal(false);
  };

  const stepProps = {
    onNext: handleNext,
    onPrevious: handlePrevious,
    isFirstStep,
    isLastStep
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'main-information':
        return <Step01MainInformation {...stepProps} />;
      case 'company-principals':
        return <Step02CompanyPrincipals {...stepProps} />;
      case 'compliance-risk-check':
        return <Step03ComplianceRiskCheck {...stepProps} />;
      case 'declaration':
        return <Step04Declaration {...stepProps} />;
      case 'application-summary':
        return <Step05ApplicationSummary {...stepProps} />;
      case 'company-documents':
        return <Step06CompanyDocuments {...stepProps} />;
      default:
        return <Step01MainInformation {...stepProps} />;
    }
  };

  return (
    <>
      <WelcomeModal
        open={showWelcomeModal}
        onOpenChange={setShowWelcomeModal}
        onAccept={handleWelcomeAccept}
      />
      
      <div className="min-h-screen bg-gray-50 py-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Wizard Progress */}
        <div className="mb-8 mt-8">
          <WizardTabs
            steps={steps}
            currentStep={currentStep}
            onStepChange={handleStepChange}
            className="max-w-5xl mx-auto"
          />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderCurrentStep()}
        </div>

        {/* Navigation */}
        <div className="hidden flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstStep}
          >
            Previous
          </Button>
          
          <div className="text-sm text-gray-500">
            Step {currentStepIndex + 1} of {steps.length}
          </div>
          
          <Button
            onClick={handleNext}
            disabled={isLastStep}
          >
            {isLastStep ? 'Submit Application' : 'Next'}
          </Button>
        </div>
        </div>
      </div>
    </>
  );
}
