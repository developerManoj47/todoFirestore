import React from 'react';
import { app } from './FirebaseConfig'
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore'

const FirestorePrectice = () => {

    const [value , loading , error  ] = useCollection(
        collection(getFirestore(app), 'users'),
        {
            snapshotListenOptions : { incledeMatedataChanges : true },
        }
    );

    return (
        <div>
            <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {value && (
                    <span>
                
                        Collection: {' '}
                        {value.docs.map((doc) => {
                            { 
                                const item = doc.data()
                                console.log(item.born) 
                             }
                            <React.Fragment key={doc.id}>
                                
                                {/* {JSON.stringify(doc._document.data.value.mapValue.fields)}, {' '} */}
                            </React.Fragment>
                        })}
                    </span>
                )}
            </p>
        </div>
    )
}

export default FirestorePrectice
