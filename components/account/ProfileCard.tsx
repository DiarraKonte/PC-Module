import { User } from 'firebase/auth';

type Props = {
  user: User | null;
};

export default function DisplayUser({ user }: Props) {
  return (
    <div className="mb-6">
      <p><strong>Email :</strong> {user?.email}</p>
    </div>
  );
}
