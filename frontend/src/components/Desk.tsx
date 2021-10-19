import { useParams } from 'react-router';
import API from '../api/API';
import SvgButton from '../components/CustomButton';

export default function Desk(props: any) {
  const { id } = useParams<{ id: string }>();

  const handleSubmit = () => {
    API.freeDesk(+id);
  };

  return (
    <SvgButton style={{ marginTop: 20 }} onClick={handleSubmit}>
      {' '}
      Next Client{' '}
    </SvgButton>
  );
}
