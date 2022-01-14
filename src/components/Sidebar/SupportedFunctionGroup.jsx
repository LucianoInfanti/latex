import SupportedSymbol from "./SupportedSymbol";

const SupportedFunctionGroup = ({ GroupTitle, children }) => {
	return (
	<div className="supportedFunctionGroupWrapper">
		<p>{GroupTitle}</p>
		<SupportedSymbol/>
		{children}
	</div>
	);
}
 
export default SupportedFunctionGroup;