'use client';

export default function CustomDropdown({ label, name, value, onChange, options }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        style={{
          fontFamily: 'inherit',
          fontSize: '15px',
          padding: '14px 16px',
          border: '1px solid var(--line)',
          borderRadius: '12px',
          background: 'var(--panel)',
          color: 'var(--ink)',
          outline: 'none',
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
