import React from 'react';
import './Info.css';

interface IInfo {
    selectedInfo: any;
}

function Info(props: IInfo) {
    const { selectedInfo } = props;
    return (
        <div className='info'>
            <h3 className='text-base font-semibold underline'>Selected node information</h3>
            {!selectedInfo &&
                <div>
                    <span>
                        Select a node to find the more details about that node.
                    </span>
                </div>
            }
            {selectedInfo &&
                <pre className='font-normal text-sm'>
                    {JSON.stringify(selectedInfo, null, 2)}
                </pre>
            }

        </div>
    );
}

export default Info;
