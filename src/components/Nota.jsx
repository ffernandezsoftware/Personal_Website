function Nota({ nota }) {
    const circles = [];

    for (let i = 0; i < 10; i++) {
    const color = i < nota ? (i < 4 ? 'bg-red-700' : (i < 7 ? 'bg-yellow-300':'bg-green-500')) : 'bg-gray-400';
    circles.push(<div key={i} className={`md:w-8 md:h-8 w-5 h-5 rounded-full border-2 border-black ${color}`} />);
    }

    return (
        <div className="flex flex-col justify-between space-y-2">
          
          <div className="flex md:space-x-5 space-x-2">
            {circles}
          </div>
          <div className='flex justify-between'>
          <div className="text-lg font-medium  text-white">1</div>
          <div className="text-lg font-medium  text-white">10</div>
          </div>
        </div>
      );
}

export default Nota