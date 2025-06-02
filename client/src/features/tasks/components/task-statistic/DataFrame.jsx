const DataFrame = ({ name, value, unite, Icon, colorClass }) => {
    return (
        <div className="bg-[#1E293B] hover:bg-[#334155] transition-all duration-300 p-6 rounded-2xl shadow-md text-white flex items-center gap-6 border border-[#334155] hover:shadow-lg group">
            {Icon && (
                <Icon className={`${colorClass} w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`} />
            )}
            <div className="flex-1 min-w-[150px]">
                <h3 className="text-xs text-gray-400 font-medium mb-1 tracking-wider uppercase truncate">
                    {name}
                </h3>
                <p className="text-2xl font-bold flex items-baseline gap-1">
                    <span className={`${colorClass} transition-colors duration-300 whitespace-nowrap`}>
                        {value}
                    </span>
                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                        {unite}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default DataFrame;
