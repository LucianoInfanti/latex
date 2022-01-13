import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const SectionContent = ({sectionTitle , item }) => {
	return (
		<div className="subCategoryContentWrapper">
		<h4>{ sectionTitle }</h4>
		</div>
	);
}
 
export default SectionContent;