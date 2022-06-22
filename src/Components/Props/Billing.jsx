import React from 'react';

function Billing({foodDetails}) {
    console.log(foodDetails)

    const SGST=(Number(foodDetails.foodPrice)*9)/100
    const CGST=(Number(foodDetails.foodPrice)*9)/100
    const Tax=(Number(foodDetails.foodPrice)*6)/100

    const Total= Number(foodDetails.foodPrice)+SGST+CGST+Tax
    
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 offset-3'>
                    <h1>Billing Details</h1>
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th>Food Ordered</th>
                                <th>Price</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{foodDetails.foodName}</td>
                                <td>Rs. {foodDetails.foodPrice}</td>
                            </tr>
                            <tr>
                                <td> SGST-9% </td>
                                <td>Rs. {SGST}</td>
                            </tr>
                            <tr>
                                <td>CGST-9%</td>
                                <td>Rs. {CGST}</td>
                            </tr>
                            <tr>
                                <td>Other Taxes-6%</td>
                                <td>Rs. {Tax}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>Rs. {Total}</td>
                            </tr>
                        </tfoot>
                            
                        
                    </table>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default Billing;