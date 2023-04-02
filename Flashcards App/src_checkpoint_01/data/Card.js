import md5 from 'md5';
class Card
	{
	constructor(front,back,deckID)
		{
		this.front=front;
		this.back=back;
		this.deckId=deckId;
		this.id=ob.id;
		}
	static fromObject(ob)
		{
		let c=new Card(ob.front,ob.back,ob.deckId);
		c.setFromObject(ob);
		return c;
		}
	}
export default Card;
