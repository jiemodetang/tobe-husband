import React, { Suspense, useState } from 'react'
import './app.scss'
import _ from 'lodash'
import cat from './bb.png'

const ComputedOne = React.lazy(() => import('Components/ComputedOne'))
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'))

function App() {
    const [showTwo, setShowTwo] = useState<boolean>(false)
    const aa = _.get({ a: 1 }, 'a')
    return (
        <div className='app'>
            {aa}
            <img src={cat} alt='' />
            <img src='./a.jpg' alt='1' />
            <Suspense fallback={<div>Loading...</div>}>
                <ComputedOne a={1} b={2} />
                {showTwo && <ComputedTwo a={3} b={4} />}
                <button type='button' onClick={() => setShowTwo(true)}>
                    显示Two啊啊啊
                </button>
            </Suspense>
        </div>
    )
}

export default App
