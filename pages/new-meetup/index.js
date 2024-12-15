import axios from 'axios';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await axios.post('/api/new-meetup', enteredMeetupData);
      console.log(response);

      // Redirect only after successful response
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
