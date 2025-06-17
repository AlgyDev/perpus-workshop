import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  ['link'],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ align: ['', 'right', 'center', 'justify'] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
];

interface QuillEditorProps {
  passText: (content: string) => void;
  initialValue?: string;
  placeholder?: string;
  customStyle?: React.CSSProperties;
  clearContent?: boolean; 
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  passText,
  initialValue = '',
  placeholder = 'Start typing here...',
  customStyle,
  clearContent = false,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    
    const quill = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
      placeholder,
    });

    quillInstance.current = quill;

    quill.on('text-change', () => {
      const content = quill.root.innerHTML;
      passText(content);
    });


  }, [passText, placeholder]);

  useEffect(() => {
    if (quillInstance.current && initialValue !== quillInstance.current.root.innerHTML) {
      quillInstance.current.clipboard.dangerouslyPasteHTML(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (clearContent && quillInstance.current) {
      quillInstance.current.root.innerHTML = '';
      passText('');
    }
  }, [clearContent, passText]);

  return (
    <div
      ref={editorRef}
      style={{
        ...customStyle,
      }}
    />
  );
};

export default QuillEditor;
