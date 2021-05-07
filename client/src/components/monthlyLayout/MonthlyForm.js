import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MonthlyContext } from '../../providers/MonthlyProvider';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//how to make the require fields required? 
export const MonthlyFormAdd = () => {
    const { monthly, getMonthlyById, addMonthly } = useContext(MonthlyContext);
    const [CuurentMonthly, setCurrentMonthly] = useState({});
    const history = useHistory();
    const { id } = useParams();

    //states for all of the properties of a monthly layout
    // const [UserProfile] = useState(''); this is dont in the controller??
    const [month, setMonth] = useState('');
    const [year, setYear] = useState(2021);
    const [style, setStyle] = useState('');



    //an use Effect ???
    useEffect(() => {


    }, []);

    //handle click save function 
    const handleClickSave = (evt) => {
        const monthly = {
            month,
            year,
            style
        }
        addMonthly(monthly)
        //I think that I need to push to the next part of the form here


    }

    //a return statement with the Form 
    return (
        <Form className="container">
            <FormGroup>
                <Label for="month">Month</Label>
                <Input
                    type="text"
                    name="month"
                    id="month"
                    placeholder="January "
                    autoComplete="off"
                    onChange={(e) => {
                        setMonth(e.target.value);
                    }}
                    value={month}
                />
            </FormGroup>
            <FormGroup>
                <Label for="year">Year</Label>
                <Input
                    type="text"
                    name="year"
                    id="year"
                    placeholder={parseInt('2021')}
                    autoComplete="off"
                    onChange={(e) => {
                        setYear(e.target.value);
                    }}
                    value={year}
                />
            </FormGroup>
            <FormGroup>
                <Label for="style">Style</Label>
                <Input
                    type="text"
                    name="style"
                    id="style"
                    placeholder="i.e. mininalist, scrapbook, maximalist"
                    autoComplete="off"
                    onChange={(e) => {
                        setStyle(e.target.value);
                    }}
                    value={style}
                />
            </FormGroup>
            {month.replace(/ /g, '').length === 0 ?
                <Button disabled
                    style={{ cursor: 'pointer' }}
                >
                    Save
                    </Button>
                :
                <Button active
                    style={{ cursor: 'pointer' }}
                    onClick={handleClickSave}>
                    Save
                </Button>
            }
        </Form>
    )
}
export default MonthlyFormAdd;