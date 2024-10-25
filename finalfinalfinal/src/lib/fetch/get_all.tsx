export async function get_all() {
    try {
        const res = await fetch(`/thesis/get-all?role=PROFESSOR`, {
            method: "GET"
        });

        if (res.ok) {
            const theses = await res.json();
            console.log(theses);
            return theses?.data;
        } else {
            console.error("Failed to fetch theses. Status:", res.status);
        }

        return null;
    } catch (error) {
        console.error("Error fetching theses:", error);
    }
}
