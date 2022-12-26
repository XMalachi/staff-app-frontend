// export const Styles = {
//     design: `py-2 px-4  
//     bg-indigo-600 
//     hover:bg-indigo-700 
//     focus:ring-indigo-500 
//     focus:ring-offset-indigo-200 
//     text-white 
//     w-full 
//     transition ease-in duration-200 
//     text-center text-base 
//     font-semibold 
//     shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  
//     rounded-lg`,
// }

export const DesignStyles = (props) => {
    return {
        design: `py-2 px-4  
        bg-${props.color}-600 
        hover:bg-${props.color}-700 
        focus:ring-${props.color}-500 
        focus:ring-offset-${props.color}-200 
        text-${props.textcolor}
        w-full 
        transition ease-in duration-200 
        text-center text-base 
        font-semibold 
        shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  
        rounded-lg`,
    }
}