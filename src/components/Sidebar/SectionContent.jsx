import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const SectionContent = ({item }) => {
	return (
		<div className="subCategoryContentWrapper">
			<TeX className="TeX" block>{ item.tex }</TeX>
			<p>{ item.tex }</p>
		</div>
	);
}
 
export default SectionContent;