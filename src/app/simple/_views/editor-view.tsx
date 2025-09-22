import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import React from 'react';

export default function EditorView() {
  return (
    <div className="min-h-dvh bg-yellow-200 flex justify-center items-center">
      <div className="border-2 border-red-500 rounded-xl bg-white max-w-[800px] max-h-[600px] w-full h-full overflow-hidden">
        <div className="h-[600px] w-[800px] overflow-hidden">
          <SimpleEditor />
        </div>
      </div>
    </div>
  );
}
