
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface WizardStep {
  id: string;
  title: string;
  status: 'complete' | 'current' | 'incomplete';
}

interface WizardTabsProps {
  steps: WizardStep[];
  currentStep: string;
  onStepChange: (stepId: string) => void;
  className?: string;
}

export function WizardTabs({ steps, currentStep, onStepChange, className }: WizardTabsProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className={cn("w-full", className)}>
      {/* Progress Lines */}
      <div className="relative mb-6">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ 
              width: currentIndex > 0 ? `${(currentIndex / (steps.length - 1)) * 100}%` : '0%' 
            }}
          />
        </div>
        
        {/* Step Indicators */}
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const isComplete = step.status === 'complete';
            const isCurrent = step.status === 'current' || step.id === currentStep;
            const isClickable = isComplete || isCurrent || index <= currentIndex + 1;
            
            return (
              <button
                key={step.id}
                onClick={() => isClickable && onStepChange(step.id)}
                disabled={!isClickable}
                className={cn(
                  "flex flex-col items-center gap-3 min-w-0 flex-1 group",
                  isClickable ? "cursor-pointer" : "cursor-not-allowed"
                )}
              >
                {/* Step Circle */}
                <div className={cn(
                  "relative w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200",
                  isComplete && "bg-blue-600 text-white",
                  isCurrent && !isComplete && "bg-white border-4 border-blue-600 shadow-lg",
                  !isComplete && !isCurrent && "bg-white border-1.5 border-gray-300",
                  isClickable && "group-hover:scale-110"
                )}>
                  {isComplete ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      isCurrent ? "bg-blue-600" : "bg-gray-400"
                    )} />
                  )}
                  
                  {/* Current step outer ring */}
                  {isCurrent && !isComplete && (
                    <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse -z-10" />
                  )}
                </div>
                
                {/* Step Label */}
                <div className="flex flex-col items-center min-w-0">
                  <span className={cn(
                    "text-sm font-semibold text-center leading-tight transition-colors duration-200",
                    (isComplete || isCurrent) ? "text-gray-900" : "text-gray-500",
                    "max-w-[120px] overflow-hidden text-ellipsis"
                  )}>
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
