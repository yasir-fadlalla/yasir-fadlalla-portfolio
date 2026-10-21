function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-50 bg-[#0a101d] flex flex-col items-center justify-center">
            <div className="relative flex justify-center items-center">
                {/* Outer Ring */}
                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#008df0]"></div>
                {/* Inner Ring */}
                <div className="rounded-full h-24 w-24 border-t-4 border-b-4 border-[#7c3aed] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <h1 className="mt-8 text-2xl font-bold tracking-widest text-white animate-pulse">
                LOADING<span className="text-[#008df0]">...</span>
            </h1>
        </div>
    )
}

export default LoadingScreen;
