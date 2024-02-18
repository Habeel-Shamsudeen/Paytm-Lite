export function InputBox({label,placeholder}){
 return <div>
    <div className="text-md font-medium py-2 text-left">
        {label}
    </div>
    <input type="text" placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
 </div>
}