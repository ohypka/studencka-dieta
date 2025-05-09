export default function ContactPage() {
    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <form
                action="https://formspree.io/f/yourFormID"
                method="POST"
                className="space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Twoje imię"
                    className="w-full border p-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Twój e-mail"
                    className="w-full border p-2"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Twoja wiadomość"
                    className="w-full border p-2"
                    rows="5"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Wyślij
                </button>
            </form>
        </div>
    );
}
