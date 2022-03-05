import ILoadLastEventRepository from '../repositories/ILoadLastEventRepository'


class EventStatus { 
    status: 'active' | 'inReview' | 'done'
    
    constructor(event?: { endDate: Date, reviewDurationInHours: number }) {
        if (event === undefined){
            this.status = 'done'
            return
        } 
        
        const now = new Date()
        
        if (event.endDate >= now){
            this.status = 'active'
            return
        }
        
        const reviewDurationInMs = event.reviewDurationInHours * 60 * 60 * 1000
        const reviewDate = new Date(event.endDate.getTime() + reviewDurationInMs)

        this.status = reviewDate >= now ? 'inReview' : 'done'

    }
}




export default class CheckLastEventStatus {
    constructor (private readonly loadLastEventRepository: ILoadLastEventRepository){}

    async perform({ groupId } : { groupId: string }): Promise<EventStatus>{
        const event = await this.loadLastEventRepository.loadLastEvent({ groupId })

        return new EventStatus(event)
        
    }
}