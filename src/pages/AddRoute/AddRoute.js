import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import { useForm } from "../../hooks/useForm";
import "./AddRoute.css";
import dayjs from "dayjs";
import * as isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { useAuth0 } from "@auth0/auth0-react";

dayjs.extend(isSameOrAfter);

//NOTE: Czy lepiej trzymać czas i datę wyjazdu w osobnych atrybutach w bazie danych,
// czy w trakcie wypełniania formularza połączyć w jeden atrybut departureDate?

//TODO: Dodawanie informacji o osobie która wystawiła ogłoszenie.
//TODO: Dokończyć refaktoryzację formularza.
const AddRoute = () => {
    const { user } = useAuth0();
    const isValidDate = (date) => {
        return dayjs(date).isSameOrAfter(dayjs().startOf("day"));
    };
    useEffect(() => {
        console.log(user);
    });

    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            startingPlace: {
                required: {
                    value: true,
                    message: "Pole nie może być puste.",
                },
                pattern: {
                    value: "\\D+",
                    message: "Nazwa nie może składać się z cyfr.",
                },
            },
            destination: {
                required: {
                    value: true,
                    message: "Pole nie może być puste",
                },
                pattern: {
                    value: "\\D+",
                    message: "Nazwa nie może składać się z cyfr.",
                },
            },
            departureDate: {
                custom: {
                    isValid: isValidDate,
                    message: "Data nie może być wsteczna",
                },
            },
            departureTime: {
                custom: {
                    isValid: () => {
                        //TODO: Jeżeli wyjazd jest w dzień dodawania, godzina musi być późniejsza niz aktualna.
                        //W przeciwnym wypadku może być dowolna.
                        const [departureHour, departureMinute] = data.departureTime.split(":");
                        return dayjs(data.departureDate).hour(departureHour).minute(departureMinute).isAfter(dayjs());
                    },
                    message: "Godzina nie może być wsteczna",
                },
            },
            arrivalDate: {
                custom: {
                    isValid: isValidDate,
                    message: "Data nie może być wsteczna",
                },
            },
            arrivalTime: {
                custom: {
                    isValid: () => {
                        //Przyjazd innego dnia niż wyjazd - godzina może byc dowolna.
                        if (dayjs(data.arrivalDate).isAfter(dayjs(data.departureDate), "day")) return true;

                        const [departureHour, departureMinute] = data.departureTime.split(":");
                        const [arrivalHour, arrivalMinute] = data.arrivalTime.split(":");

                        //Jeżeli przyjazd jest tego samego dnia, godzina nie może być wcześniejsza niż godzina wyjazdu.
                        return dayjs(data.arrivalDate)
                            .hour(arrivalHour)
                            .minute(arrivalMinute)
                            .isAfter(dayjs(data.departureDate).hour(departureHour).minute(departureMinute));
                    },
                    message: "Godzina nie może być wsteczna",
                },
            },
            availableSeats: {
                required: {
                    value: true,
                    message: "Pole nie może być puste",
                },
                custom: {
                    isValid: (number) => {
                        if (number <= 0) return false;
                        else return true;
                    },
                    message: "Przynajmniej jedno miejsce musi być wolne.",
                },
            },
        },
        onSubmit: async () => {
            const response = await fetch("/api/routes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, createdBy: user.sub }),
            });
            const responseAsText = await response.text();
            console.log(responseAsText);
        },
        initialValues: {
            startingPlace: "",
            destination: "",
            departureDate: dayjs().format("YYYY-MM-DD"),
            departureTime: dayjs().format("HH:mm"),
            arrivalDate: dayjs().format("YYYY-MM-DD"),
            arrivalTime: dayjs().add(1, "hour").format("HH:mm"),
            animals: false,
            availableSeats: 1,
        },
    });

    return (
        <>
            <div className='add-route'>
                <form onSubmit={handleSubmit} className='add-route__form'>
                    <div className='add-route__first-inner'>
                        <h3 className='h3'>Cel podróży</h3>
                        <div className='add-route__group'>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Miejsce wyjazdu'
                                    name='startingPlace'
                                    id='starting-place'
                                    type='text'
                                    value={data.startingPlace}
                                    onChange={handleChange()}
                                />
                                {errors.startingPlace && <p className='error'>{errors.startingPlace}</p>}
                            </div>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Miejsce docelowe'
                                    value={data.destination}
                                    type='text'
                                    name='destination'
                                    id='destination'
                                    onChange={handleChange()}
                                />
                                {errors.destination && <p className='error'>{errors.destination}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='add-route__first-inner'>
                        <h3 className='h3'>Informacje o wyjeździe</h3>
                        <div className='add-route__group'>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Data wyjazdu'
                                    name='departureDate'
                                    id='departure-date'
                                    type='date'
                                    onChange={handleChange()}
                                    value={data.departureDate}
                                    required
                                />
                                {errors.departureDate && <p className='error'>{errors.departureDate}</p>}
                            </div>
                            <div className='add-route__second-inner'>
                                <Input
                                    name='departureTime'
                                    value={data.departureTime}
                                    type='time'
                                    id='departure-time'
                                    label='Godzina wyjazdu'
                                    onChange={handleChange()}
                                />
                                {errors.departureTime && <p className='error'>{errors.departureTime}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='add-route__first-inner'>
                        <h3 className='h3'>Informacje o przyjeździe</h3>
                        <div className='add-route__group'>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Data przyjazdu'
                                    name='arrivalDate'
                                    id='arrival-date'
                                    type='date'
                                    onChange={handleChange()}
                                    value={data.arrivalDate}
                                />
                                {errors.arrivalDate && <p className='error'>{errors.arrivalDate}</p>}
                            </div>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Godzina przyjazdu'
                                    name='arrivalTime'
                                    id='arrival-time'
                                    type='time'
                                    value={data.arrivalTime}
                                    onChange={handleChange()}
                                />
                                {errors.arrivalTime && <p className='error'>{errors.arrivalTime}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='add-route__first-inner'>
                        <h3>Dodatkowe informacje</h3>
                        <div className='add-route__group'>
                            <div className='add-route__second-inner'>
                                <Input
                                    label='Ilość wolnych miejsc'
                                    name='availableSeats'
                                    id='available-seats'
                                    type='number'
                                    value={data.availableSeats}
                                    onChange={handleChange()}
                                />
                                {errors.availableSeats && <p className='error'>{errors.availableSeats}</p>}
                            </div>
                            <Checkbox name='animals' onChange={handleChange()} checked={data.animals}>
                                Zgadzam się na podróż ze zwierzętami
                            </Checkbox>
                        </div>
                    </div>
                    <Button variant='text' type='submit'>
                        Dodaj przejazd
                    </Button>
                </form>
            </div>
        </>
    );
};

export default AddRoute;
