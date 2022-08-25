import { routeFamily } from '../../constructor'
import { TicketCreate, Tickets } from '../route'

export const Ticket = routeFamily(TicketCreate, Tickets)

TicketCreate.setFamily(Ticket)
Tickets.setFamily(Ticket)
