import { Loader } from 'lucide-react';
import "./loading.css"

export default function Loading() {
    return (
        <div>
            <Loader className="animate-spin" size={32} />
        </div>
    );
}