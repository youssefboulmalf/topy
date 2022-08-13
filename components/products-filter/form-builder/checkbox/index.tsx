type CheckboxType = {
	type?: string;
	label: string;
	name: string;
	onChange?: any;
	filter?: string;
	checked?: any
}

const Checkbox = ({ type = '', label, name, onChange, filter,checked }: CheckboxType) => (
	<label htmlFor={label+'-'+name} className={`checkbox ${type ? 'checkbox--'+type : ''}`}>
		<input checked={checked} name={name} onChange={(e)=>onChange(e, filter)} type="checkbox" id={label+'-'+name} />
		<span className="checkbox__check"></span>
    	<p>{label}</p>
	</label>
);
  
export default Checkbox;