import './TextEditor.css'
import { useState , useCallback } from 'react';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const TextEditor = () => {
    const [value, setValue] = useState('');

    const handleChange = useCallback(
        (event) => {
            setValue(event.target.value);
        },
        [setValue]
      );
    
    const addLatexArgument = (latexArgument) => {
        setValue(value + '\\' + latexArgument);
    }

    return (
        <div>
            <textarea 
                id="testbox" 
                value={value} 
                autoFocus 
                spellCheck={false} 
                onChange={handleChange} 
                placeholder="Type your equation here to get started">
            </textarea>

            <div className="EquationPreviewerWrapper">
                <TeX 
                    className="EquationPreviewer" 
                    settings={{ errorColor: '#F78A8A', displayMode: 'true'}} 
                    block>{value}
                </TeX>
            </div>

            <button onClick={() => addLatexArgument('rho')}>Add <TeX>\rho</TeX></button>
            <button onClick={() => addLatexArgument('pi')}>Add <TeX>\pi</TeX></button>
        </div>
    );
}
 
export default TextEditor;  