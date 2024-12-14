import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailPage() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='This is a first meetup'
      address='Some address 5, 12345 Some City'
      description='This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    />
  );
}

export default MeetupDetailPage;
