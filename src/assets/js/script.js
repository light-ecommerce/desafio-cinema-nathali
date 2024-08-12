const seats = document.querySelectorAll('.seat');
const form = document.getElementById('reservaForm');

let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.dataset.number;
        const seatRow = seat.dataset.row;
        const seatId = `${seatRow}${seatNumber}`;

        if (selectedSeats.includes(seatId)) {
            selectedSeats = selectedSeats.filter(id => id !== seatId);
            seat.classList.remove('selected');
        } else {
            selectedSeats.push(seatId);
            seat.classList.add('selected');
        }

        form.seats.value = selectedSeats.join(',');
    });
});

const dateButtons = document.querySelectorAll('.date-button');
dateButtons.forEach(button => {
    button.addEventListener('click', () => {
        dateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        form.date.value = button.dataset.date;
    });
});

form.addEventListener('submit', (e) => {
    if (selectedSeats.length === 0) {
        e.preventDefault();
        alert('Por favor, selecione pelo menos um assento.');
    }
});