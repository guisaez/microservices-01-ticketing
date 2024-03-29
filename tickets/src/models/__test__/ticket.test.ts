import { Ticket } from "../ticket";

it('implements Optimistic Concurrency Control', async () => {
    // Create an instance of a ticket.
    const ticket = Ticket.build({
        title: 'Concert',
        price: 5,
        userId: '123'
    })
    // Save the ticket to the database.
    await ticket.save();

    // Fetch the ticket twice.
    const firstInstance = await Ticket.findById(ticket.id);
    const secondInstance = await Ticket.findById(ticket.id);

    // Make two separate changes to the ticket we fetch.
    firstInstance!.set({ price: 10 });

    secondInstance!.set({ price: 15 });
    // Save the first fetched ticket. 
    await firstInstance!.save();

    // Save the second fetch ticket.
    try{
        await secondInstance!.save();
    }catch(err){
        return;
    }

    throw new Error ('Should not reach this point');
    
})

it('increments the version number on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'Cocnert',
        price: 20,
        userId: '123'
    })

    await ticket.save();
    expect(ticket.version).toEqual(0);
    await ticket.save();
    expect(ticket.version).toEqual(1);
    await ticket.save();
    expect(ticket.version).toEqual(2);

})