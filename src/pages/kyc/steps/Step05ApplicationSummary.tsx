import { Button } from '../../../components/ui/button';
import { Edit, Save } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function Step05ApplicationSummary({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  return (
    <div className="max-w-[1240px] mx-auto">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Application Summary</h1>
        <div className="text-lg text-gray-600 space-y-1">
          <p>Review the information you have provided throughout the application.</p>
          <p>• If everything is correct, proceed to continue your application.</p>
          <p>• If you need to make any changes, click <strong>Edit</strong> next to the relevant section.</p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Main Information Section */}
        <div className="border border-gray-300 rounded-3xl overflow-hidden">
          <div className="bg-white border-b border-gray-300 px-8 py-5">
            <h2 className="text-xl font-semibold text-gray-700">Main information</h2>
          </div>
          <div className="bg-gray-50 p-8">
            <div className="space-y-8">
              {/* Company Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Company details</h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Relationship with Open Mineral:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Trading Partner</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Full Company Legal Name:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">OpenSettle LTD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Legal Name In Native Language:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">OpenSettle LTD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Legal Type:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Something</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Company Registration Number:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">111111111111</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Date Of Incorporation:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">20.08.2007</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Business Segment:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Something</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Annual Turnover/Sales USD:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">10 000 000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Company Classification:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Something</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Tax Residence:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Tax ID/Number:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">11111111111</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />

                {/* Company Address */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Company address</h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Country Of Incorporation:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Registered Office Address:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines, Metro Manila, Taguig, Fort Bonifacio</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Registered Office Address:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">null</span>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Additional Information</h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Company Website Link:</span>
                      <span className="text-lg font-semibold text-blue-600 w-[712px]">https://www.figma.com/design/a6rWuvfNVtkplaZ33XPT3O/OpenSettle_Platform?node-id=1495-22388&t=8G35OGp2slmtYKd0-0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Official registry link (government or company registration portal):</span>
                      <span className="text-lg font-semibold text-blue-600 w-[712px]">https://www.figma.com/design/a6rWuvfNVtkplaZ33XPT3O/OpenSettle_Platform?node-id=1495-22388&t=8G35OGp2slmtYKd0-0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 w-[432px]">Brief Business Description And Core Business Activities:</span>
                      <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines, Metro Manila, Taguig, Fort Bonifacio</span>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-300" />
              </div>

              <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-400 text-blue-600 hover:bg-blue-50">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          </div>
        </div>

        {/* Company Principals Section */}
        <div className="border border-gray-300 rounded-3xl overflow-hidden">
          <div className="bg-white border-b border-gray-300 px-8 py-5">
            <h2 className="text-xl font-semibold text-gray-700">Company Principals</h2>
          </div>
          <div className="bg-gray-50 p-8">
            <div className="space-y-8">
              {/* Authorised Signatories */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">Authorised Signatories</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Full Name:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Emmylou Micairan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Alias/Name In Native Language:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">null</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Nationality:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Position:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">project manager</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Corporate Email:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">emmylou.micairan@openmineral.com</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Phone Number:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">+63 966 893 87 54</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Shareholders */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Shareholders</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Type Of Shareholder:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Individual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Full Name/Full Company Name:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Emmylou Micairan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Position In The Company:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">project manager</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Country:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Residential/Registrated Address:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines, Metro Manila, Taguig, Fort Bonifacio</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Date Of Birth/Incorporation:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">12.08.1992</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">ID/Passport/Registration:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">111111111111111</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Shareholding %:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">25</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* UBO Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Unified Benefitiar Owner (UBO)</h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">UBO Full Name:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Emmylou Micairan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Position In The Company:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Emmylou Micairan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Country:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Philippines</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Residential Address:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">Emmylou Micairan</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Date Of Birth:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">12.08.1992</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">ID/Passport:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">111111111111111</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 w-[432px]">Shareholding %:</span>
                    <span className="text-lg font-semibold text-gray-600 w-[712px]">25</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-400 text-blue-600 hover:bg-blue-50">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          </div>
        </div>

        {/* Compliance & Risk Questionnaire Section */}
        <div className="border border-gray-300 rounded-3xl overflow-hidden">
          <div className="bg-white border-b border-gray-300 px-8 py-5">
            <h2 className="text-xl font-semibold text-gray-700">Compliance & Risk Questionnaire</h2>
          </div>
          <div className="bg-gray-50 p-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Is any company principal a Politically Exposed Person (PEP)?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Is any company principal subject to sanctions by the USA, EU, UK, Switzerland, or the UN?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Does the company have a policy for managing sanctions compliance?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Does the company have AML/CFT or anti-bribery policies in place?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Is the company regulated and does it require a license to operate?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Does the company follow international standards on child labour prevention and supply chain due diligence (e.g. ILO Conventions 138 & 182, UN Guiding Principles, OECD Guidelines)?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Does the company have internal policies on child labour prevention, supply chain due diligence, and anonymous reporting mechanisms?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
                
                <hr className="border-gray-300" />
                
                <div className="flex justify-between items-start gap-10">
                  <p className="text-gray-600 w-[900px]">Does the company confirm its commitment to comply with our Supplier Standards?</p>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">No</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="sm" className="flex items-center gap-2 border-blue-400 text-blue-600 hover:bg-blue-50">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300 pt-5 px-24 pb-6">
          <div className="flex justify-between items-center">
            <Button variant="outline" className="flex items-center gap-2 text-gray-600 border-gray-300">
              <Save className="w-4 h-4" />
              Save For Later
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={onPrevious}
                disabled={isFirstStep}
                className="text-gray-600 border-gray-300"
              >
                Back
              </Button>
              <Button 
                onClick={onNext}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLastStep ? 'Submit Application' : 'Save & Continue'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
