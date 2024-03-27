import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import React, { useEffect, useState } from "react";
import {getReadBooks, getWishlistBooks} from "../utility/SaveLocalstorage";

const PagesRead = () => {
    const [books, setbooks] = useState([]);
    useEffect(() =>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, []);
    if (!books) {
        return <div>loading.</div>;
    }

    // ----------Read data
    const [Reads, setReads ] = useState([]);
    useEffect(() => {
        const storedReadBooks = getReadBooks();
        console.log(storedReadBooks);
        if(books.length > 0) {
            const storedRead = books.filter(book => storedReadBooks.includes(book.bookId));
            console.log(storedRead);
            setReads(storedRead);
        }
        
    }, [books]);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div className='bg-[#13131308] rounded-xl items-center mt-11 p-8'>
            
            <BarChart
                width={1000}
                height={500}
                data={Reads}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {Reads.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
   
            </BarChart>
        </div>
    );
};

export default PagesRead;