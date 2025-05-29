const DataFrame = ({ name, value, unite, Icon, colorClass }) => {
    return (
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md p-4 rounded-2xl shadow-xl text-white flex items-center gap-6 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-700/30 group">
            {Icon && (
                <Icon
                    className={`${colorClass} w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                />
            )}
            <div className="flex-1 min-w-[150px]">
                <h3 className="text-sm text-gray-400 font-semibold mb-2 tracking-wide uppercase truncate">
                    {name}
                </h3>
                <p className="text-xl font-extrabold flex items-baseline gap-1">
                    <span className={`${colorClass} transition-colors duration-300 whitespace-nowrap`}>
                        {value}
                    </span>
                    <span className="text-gray-400 text-base font-medium whitespace-nowrap">
                        {unite}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default DataFrame;
