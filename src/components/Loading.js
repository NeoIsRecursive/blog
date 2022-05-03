const Loading = () => {
    return (
        <div className="fixed h-full w-full flex items-center justify-center bg-black top-0 right-0 bg-opacity-50">
            <div className="w-20 h-20 border-4 border-sky-300 rounded-full border-t-white animate-spin"></div>
        </div>
    )
}

export default Loading;