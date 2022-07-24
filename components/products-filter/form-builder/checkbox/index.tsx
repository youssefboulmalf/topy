type CheckboxType = {
	type?: string;
	label: string;
	name: string;
	onChange?: any;
	filter?: string;
}

const Checkbox = ({ type = '', label, name, onChange, filter }: CheckboxType) => (
	<label htmlFor={label+'-'+name} className={`checkbox ${type ? 'checkbox--'+type : ''}`}>
		<input name={name} onChange={(e)=>onChange(e, filter)} type="checkbox" id={label+'-'+name} />
		<span className="checkbox__check"></span>
    	<p>{label}</p>
	</label>
);
  
export default Checkbox;