// ------------------------------------------------------------------
// formatDate (date_object, format)
// Returns a date in the output format specified.
// The format string uses the same abbreviations as in getDateFromFormat()
// ------------------------------------------------------------------
export function formatDate(date : Date, format? : string) : string {
	
	let result : string = "";
	let y : number = date.getFullYear();
	let M : number = date.getMonth() + 1;
	let d : number = date.getDate();
	let H : number = date.getHours();
	let m : number = date.getMinutes();
	let s : number = date.getSeconds();
	
	result = [y, LZ(M), LZ(d),LZ(H), LZ(m), LZ(s)].join('');
	
	return result;
}


function LZ(x : number) : string {
	return((x<0 || x>9) ? "" : "0") + x;
}