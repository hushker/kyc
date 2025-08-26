import { useState } from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Trash2, Upload, FileText, X, Save } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface UploadedFile {
  id: string;
  name: string;
  description: string;
  status: 'uploaded' | 'filled' | 'error';
  errorMessage?: string;
}

interface DocumentSection {
  id: string;
  title: string;
  files: UploadedFile[];
}

export function Step06CompanyDocuments({ onNext, onPrevious, isFirstStep, isLastStep }: NavigationProps) {
  const [documents, setDocuments] = useState<DocumentSection[]>([
    {
      id: 'incorporation',
      title: 'Incorporation/Registration certificate',
      files: [
        {
          id: '1',
          name: 'NDA2023-11-06 OMLTD Mutual NDA template EN.docx',
          description: 'Document description',
          status: 'uploaded'
        },
        {
          id: '2',
          name: 'NDA2023-11-06 OMLTD Mutual NDA template EN.docx',
          description: 'Some doc',
          status: 'filled'
        },
        {
          id: '3',
          name: 'NDA2023-11-06 OMLTD Mutual NDA template EN.docx',
          description: '',
          status: 'error',
          errorMessage: 'Не удалось загрузить'
        }
      ]
    },
    {
      id: 'passport-id',
      title: 'Copy Passport/ID of CEO, Director(s), & Shareholder(s) holding more than 10% of ownership directly/indirectly and in the company and copy Passport/ID of UBOs',
      files: []
    },
    {
      id: 'trade-license',
      title: 'Valid Trade License',
      files: []
    },
    {
      id: 'trade-license-2',
      title: 'Valid Trade License',
      files: []
    },
    {
      id: 'incumbency',
      title: 'Incumbency and/or Share certificate',
      files: []
    },
    {
      id: 'memorandum',
      title: 'Articles/Memorandum of Association or Charter',
      files: []
    },
    {
      id: 'financial-statements',
      title: 'Copy of the latest audited Financial Statements of the Company in English',
      files: []
    },
    {
      id: 'chamber-commerce',
      title: 'Copy or online extract of the Chamber of Commerce or similar trade register Extract (not older than 6 months)',
      files: []
    },
    {
      id: 'authority-document',
      title: 'Document confirming the authority of persons authorized to sign transactions, contracts on behalf of the Company',
      files: []
    },
    {
      id: 'shareholding-structure',
      title: 'Signed Shareholding Structure chart with Ultimate beneficial ownership including all the layers up to 10% and above',
      files: []
    },
    {
      id: 'business-description',
      title: 'Share presentation on company activities or provide brief business description and core business activities',
      files: []
    },
    {
      id: 'policies',
      title: 'Policies',
      files: []
    },
    {
      id: 'other-documents-1',
      title: 'Other Documents',
      files: []
    },
    {
      id: 'other-documents-2',
      title: 'Other Documents',
      files: []
    }
  ]);

  const updateFileDescription = (documentId: string, fileId: string, description: string) => {
    setDocuments(prev => prev.map(doc => {
      if (doc.id === documentId) {
        return {
          ...doc,
          files: doc.files.map(file => 
            file.id === fileId ? { ...file, description } : file
          )
        };
      }
      return doc;
    }));
  };

  const removeFile = (documentId: string, fileId: string) => {
    setDocuments(prev => prev.map(doc => {
      if (doc.id === documentId) {
        return {
          ...doc,
          files: doc.files.filter(file => file.id !== fileId)
        };
      }
      return doc;
    }));
  };

  const clearFileDescription = (documentId: string, fileId: string) => {
    updateFileDescription(documentId, fileId, '');
  };

  const FileUploadArea = () => (
    <div className="flex-1">
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
        <div className="w-10 h-10 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
          <Upload className="w-5 h-5 text-gray-500" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
            <Button variant="link" className="p-0 h-auto text-blue-600 font-normal">
              Click to upload
            </Button>
            <span className="text-sm text-gray-500">or drag and drop</span>
          </div>
          <p className="text-xs text-gray-500">PDF, DOC, DOCX (max 20MB)</p>
        </div>
      </div>
    </div>
  );

  const FilePreview = ({ file, documentId }: { file: UploadedFile; documentId: string }) => {
    const getStatusColor = () => {
      switch (file.status) {
        case 'uploaded': return 'border-gray-200';
        case 'filled': return 'border-gray-200';
        case 'error': return 'border-red-200';
        default: return 'border-gray-200';
      }
    };

    const getTextColor = () => {
      switch (file.status) {
        case 'error': return 'text-red-600';
        default: return 'text-gray-900';
      }
    };

    return (
      <div className={`border rounded-xl p-3 ${getStatusColor()}`}>
        <div className="flex items-start gap-3">
          <div className="flex items-center gap-3 flex-1">
            {file.status === 'error' ? (
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-4 h-4 text-red-600" />
              </div>
            ) : (
              <FileText className="w-6 h-6 text-gray-600" />
            )}
            <span className={`text-sm font-medium ${getTextColor()}`}>
              {file.name}
            </span>
          </div>
          <div className="flex items-center gap-6">
            {file.status === 'error' ? (
              <span className="text-sm text-red-600">{file.errorMessage}</span>
            ) : (
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Input
                    value={file.description}
                    onChange={(e) => updateFileDescription(documentId, file.id, e.target.value)}
                    placeholder="Document description"
                    className="w-[467px] h-10"
                  />
                  {file.description && file.status === 'filled' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100"
                      onClick={() => clearFileDescription(documentId, file.id)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 hover:bg-red-50"
              onClick={() => removeFile(documentId, file.id)}
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-blue-600 mb-2">
          Company Documents
        </h1>
        <div className="text-lg text-gray-600 leading-relaxed">
          Please upload your documents below<br />
          • Upload at least 1 document<br />
          • Supported formats: bmp, jpg/jpeg, doc/docx, odt, txt, pdf, png, ppt/pptx, rtf.<br />
          • Supported size: less than 30mb<br />
          • Documents with an asterisk are mandatory, but if they are not available/applicable/confidential, please state this and explain the reason
        </div>
      </div>

      {/* Documents Container */}
      <Card className="bg-gray-50 border border-gray-200 rounded-3xl">
        <CardContent className="p-8">
          <div className="space-y-5">
            {documents.map((document, index) => (
              <div key={document.id}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-none w-[608px]">
                      <h3 className="text-base font-semibold text-gray-800">
                        {document.title}
                      </h3>
                    </div>
                    <div className="flex-1 space-y-4">
                      <FileUploadArea />
                    </div>
                  </div>
                  
                  {/* Uploaded Files */}
                  {document.files.length > 0 && (
                    <div className="space-y-2">
                      {document.files.map((file) => (
                        <FilePreview
                          key={file.id}
                          file={file}
                          documentId={document.id}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Divider */}
                {index < documents.length - 1 && (
                  <hr className="my-5 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer Buttons */}
      <div className="flex items-center justify-between mt-5 px-25">
        <Button variant="outline" className="flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save For Later
        </Button>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="lg"
            onClick={onPrevious}
            disabled={isFirstStep}
          >
            Back
          </Button>
          <Button 
            size="lg" 
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLastStep ? 'Submit Application' : 'Finish'}
          </Button>
        </div>
      </div>
    </div>
  );
}
