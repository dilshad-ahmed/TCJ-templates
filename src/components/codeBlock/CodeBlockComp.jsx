import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CodeBlockComp = ({ code, language, showLineNumbers }) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
      CodeBlock
    />
  );
};

export default CodeBlockComp;
