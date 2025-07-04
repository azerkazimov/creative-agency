

## 1. Komponentlərin və formların əlaqəsi

### İdarə olunan komponentlər (Controlled Components)

React-da formlar adətən idarə olunan komponentlər kimi həyata keçirilir, burada formun vəziyyəti React komponenti tərəfindən idarə olunur.

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Göndərildi:', { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ad"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Göndər</button>
    </form>
  );
}
```

### İdarə olunmayan komponentlər (Uncontrolled Components)

Dəyərləri birbaşa DOM-dan almaq üçün ref-lərdən istifadə edirlər.

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Göndərildi:', {
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Ad" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Göndər</button>
    </form>
  );
}
```

## 2. Form məlumatlarının işlənməsi

### Form vəziyyətinin birləşdirilməsi

```jsx
function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form məlumatları:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Ad"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="Yaş"
      />
      <select name="country" value={formData.country} onChange={handleInputChange}>
        <option value="">Ölkə seçin</option>
        <option value="russia">Rusiya</option>
        <option value="usa">ABŞ</option>
        <option value="germany">Almaniya</option>
      </select>
      <button type="submit">Göndər</button>
    </form>
  );
}
```

### Checkbox və radio düymələri ilə işləmək

```jsx
function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    theme: 'light'
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleRadioChange = (e) => {
    setPreferences(prev => ({
      ...prev,
      theme: e.target.value
    }));
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={preferences.newsletter}
          onChange={handleCheckboxChange}
        />
        Xəbər bülletenlərinə abunə ol
      </label>
      
      <label>
        <input
          type="checkbox"
          name="notifications"
          checked={preferences.notifications}
          onChange={handleCheckboxChange}
        />
        Bildirişləri aç
      </label>

      <div>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={preferences.theme === 'light'}
            onChange={handleRadioChange}
          />
          İşıqlı tema
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={preferences.theme === 'dark'}
            onChange={handleRadioChange}
          />
          Qaranlıq tema
        </label>
      </div>
    </form>
  );
}
```

## 3. Form validasiyası

### Müştəri tərəfində sadə validasiya

```jsx
function ValidatedForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validasiyası
    if (!formData.email) {
      newErrors.email = 'Email mütləqdir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email düzgün deyil';
    }

    // Parol validasiyası
    if (!formData.password) {
      newErrors.password = 'Parol mütləqdir';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Parol minimum 6 simvol olmalıdır';
    }

    // Parol təsdiqinin validasiyası
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parollar uyğun gəlmir';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form etibarlıdır:', formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Sahə dəyişəndə xətanı təmizlə
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Parol"
        />
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
      </div>
      
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Parolu təsdiq edin"
        />
        {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
      </div>
      
      <button type="submit">Qeydiyyatdan keç</button>
    </form>
  );
}
```

## 4. İkitərəfli məlumat bağlama (Two-way Data Binding)

React-da two-way binding `value` və `onChange`-in kombinasiyası ilə həyata keçirilir:

```jsx
function TwoWayBindingExample() {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* Mətn üçün ikitərəfli bağlama */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Mətn daxil edin"
      />
      <p>Daxil etdiyiniz: {text}</p>
      
      {/* Rəqəm üçün ikitərəfli bağlama */}
      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
      />
      <p>Sayğac: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
```

### İkitərəfli bağlama üçün xüsusi hook

```jsx
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    reset: () => setValue(initialValue)
  };
}

function FormWithCustomHook() {
  const name = useFormInput('');
  const email = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Göndərildi:', {
      name: name.value,
      email: email.value
    });
    name.reset();
    email.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...name} placeholder="Ad" />
      <input {...email} type="email" placeholder="Email" />
      <button type="submit">Göndər</button>
    </form>
  );
}
```

## 5. Məlumatlarla siyahıların göstərilməsi

### Əsas siyahı göstərilməsi

```jsx
function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Anna', email: 'anna@email.com' },
    { id: 2, name: 'Boris', email: 'boris@email.com' },
    { id: 3, name: 'Vera', email: 'vera@email.com' }
  ]);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}
```

### Silmə imkanı olan interaktiv siyahı### Filtrlənmə və sıralama siyahıları

```jsx
function FilterableList() {
  const [products] = useState([
    { id: 1, name: 'iPhone', category: 'elektronika', price: 999 },
    { id: 2, name: 'T-shirt', category: 'geyim', price: 29 },
    { id: 3, name: 'Laptop', category: 'elektronika', price: 1299 },
    { id: 4, name: 'Cins şalvar', category: 'geyim', price: 79 }
  ]);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredAndSortedProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(filter.toLowerCase()) &&
      (categoryFilter === 'all' || product.category === categoryFilter)
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Məhsul axtarın..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Bütün kateqoriyalar</option>
          <option value="elektronika">Elektronika</option>
          <option value="geyim">Geyim</option>
        </select>
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Ada görə sırala</option>
          <option value="price">Qiymətə görə sırala</option>
        </select>
      </div>
      
      <ul>
        {filteredAndSortedProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - 
            {product.category} - 
            ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 6. Key-lərin istifadəsi

### Düzgün açarların əhəmiyyəti

Key-lər React-a hansı elementlərin dəyişdiyini, əlavə olunduğunu və ya silindiğini müəyyən etməyə kömək edir.

```jsx
// ❌ Pis - indeksi açar kimi istifadə etmək
function BadKeyExample() {
  const [items, setItems] = useState(['a', 'b', 'c']);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Sıra dəyişəndə problem
      ))}
    </ul>
  );
}

// ✅ Yaxşı - unikal ID istifadə etmək
function GoodKeyExample() {
  const [items, setItems] = useState([
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' }
  ]);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

## 7. React Hook Form

React Hook Form minimal yenidən render etmə ilə formlarla işləmək üçün effektiv yol təqdim edir.

### Quraşdırma

```bash
npm install react-hook-form
```

### Əsas istifadə

```jsx
import { useForm } from 'react-hook-form';

function BasicHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form məlumatları:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { required: 'Ad mütləqdir' })}
        placeholder="Ad"
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <input
        {...register('email', {
          required: 'Email mütləqdir',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Yanlış email formatı'
          }
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register('age', {
          required: 'Yaş mütləqdir',
          min: {
            value: 18,
            message: 'Minimum yaş 18'
          }
        })}
        type="number"
        placeholder="Yaş"
      />
      {errors.age && <span>{errors.age.message}</span>}

      <button type="submit">Göndər</button>
    </form>
  );
}
```

## 8. Praktik nümunələr

Bu təlimat React-da formlar və siyahılarla işləməyin əsas konseptlərini əhatə edir. Yuxarıdakı interaktiv nümunədə tapşırıq meneceri üçün əsas funksiyalar göstərilir: tapşırıq əlavə etmək, silmək və tamamlanma statusunu dəyişdirmək.

### Praktik tapşırıq

Tam funksionallıqlı "Tapşırıq Meneceri" tətbiqi yaradın aşağıdakı imkanlarla:

1. **React Hook Form istifadə edərək tapşırıq əlavə etmə formu**
2. **Tapşırıqların siyahısı** (düzgün key-lərlə)
3. **Filtrlənmə və axtarış imkanları**
4. **Statistika və tərəqqi göstəricisi**

Bu tapşırıq React-da form və siyahı işləmənin bütün öyrənilən konseptlərini təcrübədə tətbiq etməyə kömək edəcək.