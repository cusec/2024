import { redirect } from "next/navigation";

export default async function Hotel() {
  redirect(
    "https://www.marriott.com/event-reservations/reservation-link.mi?id=1698351860401&key=GRP&app=resvlink"
  );
}
